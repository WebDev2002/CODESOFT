import { app } from "./app.js";
import dotenv from 'dotenv'
import {dbconnection} from './db/db.connection.js'


dotenv.config({
    path:'./.env'
})

dbconnection()
.then(app.listen(process.env.PORT || 8080 , ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
    
})).catch((error)=>{
    console.log('error : ', error);
    
})
