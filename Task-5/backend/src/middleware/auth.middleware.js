import jwt from 'jsonwebtoken';
import { apiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const auth = asyncHandler(async (req, res, next) => {
  // Get token from cookies or Authorization header
  const authHeader = req.header("Authorization");
  const token = req.cookies?.token || (authHeader && authHeader.startsWith("Bearer ","") ? authHeader.slice(7) : null)
console.log(token);
  
  if (!token) {
    // No token provided
    throw new apiError(401, "Unauthorized access - No token provided");
  }

  try {
    console.log('Received Token:', token); // Log the token received
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message); // Log the error message
    throw new apiError(401, "Invalid token");
  }
});

export { auth };
