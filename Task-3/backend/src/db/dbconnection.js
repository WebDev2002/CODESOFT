import mongoose from "mongoose"


const dbconnection = async()=>{
 try {
    await mongoose.connect(`${process.env.DB_URL}`)
    console.log('DB Connected');
    
 } catch (error) {
    console.log("Error : " ,error);
    
 }
}

export {dbconnection}