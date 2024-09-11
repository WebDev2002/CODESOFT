import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostBlog() {

    const navigation = useNavigate()

    const newBlog = ()=>{
        navigation('/create-blog')
    }

  return (
    <>
    
    <div className="show-blog">
        <h1>Show Blog</h1>
        <div className="button">
            <button>Update</button>
            <button>Delete</button>
            <button onClick={newBlog}>Create New Blog</button>
        </div>
    </div>

    </>
  )
}

export default PostBlog