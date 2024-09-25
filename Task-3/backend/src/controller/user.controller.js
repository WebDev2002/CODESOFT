import {UserDetails} from '../model/user.model.js'
import {asynhandler} from '../utils/asynHandler.js'
import {apiError} from '../utils/apiError.js'
import {apiResponse} from '../utils/apiResponse.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'



const GenerateAccessAndRefreshToken = async(user)=>{
   
     const RefreshToken = jwt.sign(
        {id: user._id},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
        
     )
     const AccessToken = jwt.sign(
        {id: user._id, name:user.name, email:user.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
     )
     console.log('accessToken : ',process.env.ACCESS_TOKEN_EXPIRY);
     
     user.refreshtoken = RefreshToken
     await user.save({validateBeforeSave:false})

     return {RefreshToken, AccessToken}
}


const signUp = asynhandler(async(req, res)=>{
    const {username, email, password} = req.body

    const userCreated = await UserDetails.create({
        username,
        email,
        password
    })
    if(userCreated){
    
        return res.status(201).json(
            new apiResponse(200,
                "User Created"
            )
        )
    }else{
        throw new apiError(500, "Internal server error")
    }
    

});

const signIn = asynhandler(async(req, res)=>{
    const {email, password} = req.body

    const user = await UserDetails.findOne({email})
    if(!user){
      throw new apiError(401, "Email is Invalid")
    }

   const passwordcheck = await bcrypt.compare(password, user.password)
   if(!passwordcheck){
    throw new apiError(401, "Password is Invalid")
   }
     
    const {RefreshToken, AccessToken} = await GenerateAccessAndRefreshToken(user)

    const option={
        httpOnly:true,
        secure:true
    }

    return res.status(200)
    .cookie("RefreshToken", RefreshToken, option)
    .cookie("AccessToken", AccessToken, option)
    .json( new apiResponse(
        200,
        {RefreshToken,AccessToken},
        "User Login Successfully"
    ));

})

const logOut = asynhandler(async(req, res)=>{
   await UserDetails.findByIdAndUpdate(
    req.user._id,
    {
           $set:{
            refreshtoken:undefined
           }
   },
   {
    new:true
   }
)

const option={
   httpOnly:true,
   secure:true
}
return res.status(200).clearCookie("AccessToken", option).clearCookie("RefreshToken", option).json(200, "Logout Successfully")
})


const refresAccesstoken = asynhandler(async(req,res)=>{
   const incomingRefreshAndAccessToken = req.cookies.RefreshToken || req.body.RefreshToken
   if(!incomingRefreshAndAccessToken){
       throw new apiError(401 ," unauthorized ")
   }

  const decode = jwt.verify(incomingRefreshAndAccessToken , process.env.REFRESH_TOKEN_SECRET);
 const user = await UserDetails.findById(decode?._id)
 if(!user){
    throw new apiError(401 ,"Invalid Refresh token")
 }
 if(incomingRefreshAndAccessToken !== user?.refreshtoken){
    throw new apiError(401, "Refresh token is expire")
 }

 const option={
    httpOnly:true,
    secure:true
 }

 const {AccessToken, RefreshToken} =await GenerateAccessAndRefreshToken(user)

 return res.status(200).cookie("AccessToken", AccessToken, option).cookie("RefreshToke", RefreshToken, option).json(
    new apiResponse(
        200,{}
    )
 )

})

export{signUp, signIn, logOut, refresAccesstoken}