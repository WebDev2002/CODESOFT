import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function PostBlog() {

  const [userblog, setUserblog] = useState([]);
  const userId = '66e0f1908f270fb8472c917a';

    const navigation = useNavigate()
    const newBlog = ()=>{
        navigation('/create-blog')
    }


    useEffect(()=>{
     try {
       const fetch = async()=>{
            const res = await axios.get(`http://127.0.0.1:8080/user/blogs/${userId}` ,{ withCredentials: true })
            console.log(res.data.message);
            setUserblog(res.data.message)
            
            // if(res.data.message == []){
            //   console.log("No Blog");
              
            // }
            
       }
       fetch()
     } catch (error) {
      console.log(error);
      
     }
    }, [])



    const HandleDeleteBlog = async(deleteblogId)=>{
           try {
            const res = await axios.get(`http://127.0.0.1:8080/user/delete/${deleteblogId}`,{ withCredentials: true } )
            console.log(res.data);
            console.log(blogId);
            
           } catch (error) {
            console.log(error);
            
           }
           
    }

    const HandleUpdateBlog = async(blogId)=>{
          try {
            const res = await axios.post(`http://127.0.0.1:8080/user/update/${blogId}`)
            console.log(blogId);
            
            
          } catch (error) {
            console.log(error);
            
          }
      // navigation(`/create-blog/${updateblogId}`)
      // console.log(updateblogId);
      
      
    }

  return (
    <>
    
    <div className="show-blog">
        <h1>Show Blog</h1>
        <div className="button">
          
            <button onClick={newBlog}>Create New Blog</button>
            {userblog.map((data)=>(
              <>
               <h3 key={data._id}>{data.title}</h3>
               <p>{data.content}</p>
               <button onClick={()=>HandleUpdateBlog(data._id)}>Update</button>
               <button onClick={()=>HandleDeleteBlog(data._id)}>Delete</button>
              </>
             ))}
        </div>
    </div>

    </>
  )
}

export default PostBlog