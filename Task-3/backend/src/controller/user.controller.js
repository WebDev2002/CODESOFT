import {UserDetails} from '../model/user.model.js'
// import jwt from 'jsonwebtoken'
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

     user.refreshtoken = RefreshToken
     await user.save({validateBeforeSave:false})

     return {RefreshToken, AccessToken}
}


const signUp = asynhandler(async(req, res)=>{
    const {name, email, password} = req.body

    const userCreated = await UserDetails.create({
        name,
        email,
        password
    })

    const option={
        httpOnly:true,
        secure:true
    }

    if(userCreated){
        const {RefreshToken, AccessToken} = await GenerateAccessAndRefreshToken(userCreated)
    
        return res.status(201).cookie("RefreshToke : ", RefreshToken, option).cookie("AccessToken : ", AccessToken, option).json(
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

    return res.status(200).cookie("RefreshToken : ", RefreshToken, option).cookie("AccessToken : ", AccessToken, option)
    .json( new apiResponse(
        200,
        "User Login Successfully"
    ))

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
return res.status(200).cleanCookie("AccessToken", option).cleanCookie("RefreshToken", option).json(200, "Logout Successfully")
})

export{signUp, signIn, logOut}