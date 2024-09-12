import { asynhandler } from "../utils/asynHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Blog } from "../model/blog.model.js";
import { UserDetails } from "../model/user.model.js";


const createBlog = asynhandler(async(req, res)=>{
    const {title, content} = req.body;

    const author = req.user.id

    const user = await UserDetails.findById(author)

    if(!user){
        return res.status(404).json(new apiError(404, {}, "User not Found"))
    }

    const blogPost = await Blog.create({
        title,
        content,
        author:author
    })

    if(blogPost){
        return res.status(200).json(
            new apiResponse(200,
                {},
                "Blog Post"
            )
        )
    }else{
        return res.status(500).json(new apiError(500, {}, "Server Error"))
    }
})

const deleteBlog = asynhandler(async(req,res)=>{
    const blog = await Blog.findById(req.params.id)
    
    

    if(!blog){
        return res.status(404).json(new apiError(404, {}, "Blog Not Found"))
    }

    if(blog.author.toString() !== req.user.id){
        return res.status(401).json( new apiError(401, {}, "Not Authorized to delete the blog"))
    }

    const blogRemove = await Blog.deleteOne({_id:blog})

    if(blogRemove){
        return res.status(200).json(new apiResponse(200, {}, "Blog deleted successfully"))
    }else{
        return res.status(500).json(new apiError(500, {}, "Server Error"))
    }
    
})

const updateBlog = asynhandler(async(req, res)=>{
    const {title, content} = req.body;

    const blog = await Blog.findById(req.params.id)

    if(!blog){
        return res.status(404).json(new apiError(404, {}, "Blog not fiund"))
    }

    if(blog.author.toString() !== req.user.id){
        return res.status(401).json(new apiError(401, {} , "Not Authorized to update the blog"))
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;

    const updatedBlog = await blog.save()

    if(updatedBlog){
        return res.status(200).json( new apiResponse(200, {}, "Successfully update"))
    }else{
        return res.status(500).json(new apiError(
            500,
            {},
            "Server Error"
        ))
    }

})

const fetchBlog = asynhandler(async(req,res)=>{
  const userID = req.params.id

    const user = await UserDetails.findById(userID).populate('blog')
    if(!user){
        throw new apiError(401, "User not found")
    }

    const blogs = await Blog.find({ author: userID });

    return res.status(200).json(
        new apiResponse(200, "User's Blogs Retrieved Successfully", blogs)
    );
})

export {createBlog, deleteBlog, updateBlog, fetchBlog}