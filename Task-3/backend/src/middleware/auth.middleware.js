import {UserDetails} from '../model/user.model.js'
import {apiError} from '../utils/apiError.js'
import {asynhandler} from '../utils/asynHandler.js'
import jwt from 'jsonwebtoken'


const VerifyUser = asynhandler(async(req, _, next)=>{
 try {
    
      const token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer", "")


       if(!token){
         throw new apiError(401, "Unauthorize Access")
       }

      const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  

      const user = await UserDetails.findById(decodeToken.id)
      

      if(!user){
        throw new apiError(401, "Invalid user")
      }
      req.user = user
next()
 } catch (error) {
    throw new apiError(401, error?.message || "Invalid Token")
 }
})
export {VerifyUser}