import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import API from '../axios/Axiosinstance';
// import axios from 'axios';



// Function to decode JWT and extract userId
const getUserIdFromToken = () => {
  const token = localStorage.getItem('accessToken'); // Get accessToken from localStorage
  if (token) {
    const base64Url = token.split('.')[1]; // Get the payload part of the token (2nd part)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    ); // Decode the base64 payload

    const decodedToken = JSON.parse(jsonPayload); // Parse the JSON payload
    return decodedToken.id; // Assuming userId is stored in the payload
  }
  return null; // Return null if token is not found or invalid
};


function PostBlog() {
   const userID = getUserIdFromToken()


   const [updateblog, setUpdateblog] = useState(true)
   const [updateblogid ,setUpdateblogid] = useState(null)
  const [userblog, setUserblog] = useState([]);
  //  const userId = '66e0f1908f270fb8472c917a';

    const navigation = useNavigate()
    const newBlog = ()=>{
        navigation('/create-blog')
    }


    useEffect(()=>{
     try {
       const fetch = async()=>{
             const res = await API.get(`/blogs/${userID}` ,{ withCredentials: true })
             console.log(res.data);
             setUserblog(res.data.message)
            
             if(res.data.message == []){
               console.log("No Blog");
              
             }
            
       }
       fetch()
     } catch (error) {
      console.log(error);
      
     }
    }, [])



    const HandleDeleteBlog = async(deleteblogId)=>{
           try {
            const accessToken = localStorage.getItem('accessToken')
             const res = await API.get(`/delete/${deleteblogId}`,{
              headers:{
                 Authorization: `Bearer ${accessToken}`
              },
              withCredentials:true
             })
             setUserblog(userblog.filter(blog => blog._id !== deleteblogId));
             console.log(res.data);
            console.log(deleteblogId);
            
            
           } catch (error) {
            console.log(error);
            
           }
           
    }
    const [updateblogData, setUpdateblogData] = useState({
      title:'',
      content:''
    })

    const HandleUpdateBlog = async(updateblogId, updateblogtitle, updateblogcontent)=>{
            console.log(updateblogId);
            console.log(updateblogtitle);
            console.log(updateblogcontent);
            setUpdateblogData({
              title:updateblogtitle,
              content:updateblogcontent
            })
            setUpdateblog(false)
          setUpdateblogid(updateblogId)
    }

    





  const handleblog = (e)=>{
      const {name , value} = e.target;
      setUpdateblogData({
          ...updateblogData,
          [name]:value
         })
  }

    const updatehandleSubmit = async()=>{
         try {
          console.log(updateblogid);
          
          const accessToken = localStorage.getItem('accessToken')
           const res = await API.post(`/update/${updateblogid}`, updateblogData,{
            headers:{
               Authorization: `Bearer ${accessToken}`
            },
            withCredentials:true
           })
           console.log(res.data);
           setUpdateblog(true)
          
          
         } catch (error) {
          console.log(error);
          
         }
         
    }

  return (
    <>
    <Navbar/>
    {updateblog ? <>
    <div className="show-blog">
        <h1>Blogs</h1>
          
            <button onClick={newBlog}>Create New Blog</button>
            {userblog.map((data)=>(
              <>
               <h3 key={data._id}>{data.title}</h3>
               <p>{data.content}</p>
               <button onClick={()=>HandleUpdateBlog(data._id, data.title, data.content)}>Update</button>
               <button onClick={()=>HandleDeleteBlog(data._id)}>Delete</button>
              </>
             ))}
        </div>
        </> : <>
        <div className="create-blog">
        <h2>Edit</h2>
        <form onSubmit={updatehandleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Blog Title"
              name='title'
               value={updateblogData.title}
               onChange={handleblog}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Blog Content"
              name='content'
               value={updateblogData.content}
               onChange={handleblog}
              required
            />
          </div>
          <button type="submit">Update Blog</button>
        </form>
      </div>
      </>}
    </>
  )
}

export default PostBlog