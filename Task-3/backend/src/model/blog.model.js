import mongoose, {Schema} from "mongoose";
import { UserDetails } from "./user.model.js";

const blogSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, ref:UserDetails,
        require:true
    }
}, {timestamps:true})

export const Blog = mongoose.model("Blog", blogSchema)