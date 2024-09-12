import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, ref:'userdetails',
        require:true
    }
}, {timestamps:true})

export const Blog = mongoose.model("Blog", blogSchema)