import mongoose from "mongoose"


const dbconnection = async()=>{
 try {
    await mongoose.connect(`${process.env.DB_URL}`,{serverSelectionTimeoutMS: 50000 })
    console.log('DB Connected');
    
 } catch (error) {
    console.log("Error : " ,error);
    
 }
}

export {dbconnection}