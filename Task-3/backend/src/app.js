import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"25kb"}));
app.use(express.urlencoded({limit:"25kb", extended:true}))
app.use(cookiesParser());

import route from './routes/user.route.js'

app.use("/user", route)

export {app}