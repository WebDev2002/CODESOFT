import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // Use 'bcryptjs' for consistency
import { User } from '../models/user.model.js';

// Token generation function
const GenerateToken = (userId) => {
    const token = jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: '1hr' }
    );
    return token;
};

// Sign-up function
const signUp = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword // Save hashed password
    });

    if (user) {
        const token = GenerateToken(user._id);
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Enable secure flag in production
            // path: '/' // Uncomment if needed
        };
        return res.status(200)
            .cookie('token', token, options)
            .json(new apiResponse(200, "User created successfully"));
    } else {
        throw new apiError(500, "Internal server error");
    }
});

// Sign-in function
const signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new apiError(401, "Invalid email");
    }

    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new apiError(401, "Invalid password");
    }

    const token = GenerateToken(user._id);
    const options = {
        httpOnly: true,
         secure: process.env.NODE_ENV === 'production', 
    };
       console.log(token);
       
    return res.status(200)
        .cookie("token", token, options)
        .json(new apiResponse(200, {token}, "User logged in successfully"));
});

// Log-out function
const logOut = asyncHandler(async (_, res) => {
    return res.clearCookie('token')
        .json(new apiResponse(200, "Logged out successfully"));
});

export { signUp, signIn, logOut };
