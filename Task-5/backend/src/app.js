import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))


app.use(express.json({limit:'25kb'}))
app.use(express.urlencoded({limit:'25kb', extended:true}))
app.use(cookieParser())

import router from './routes/user.router.js'


app.use("/user", router)

export{app}