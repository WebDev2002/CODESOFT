import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios'

function CreateBlog() {

  const [createblogData, setCreateblogData] = useState({
    title:'',
    content:''
  })




  const handleblog = (e)=>{
      const {name , value} = e.target;
         setCreateblogData({
          ...createblogData,
          [name]:value
         })
  }

  const sendblogcontent = async(createblogData)=>{
    try {
      const res = await axios.post('http://127.0.0.1:8080/user/create', createblogData, { withCredentials: true })
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createblogData);
    sendblogcontent(createblogData)
      setCreateblogData({
        title:'',
        content:''
      })
  };

  return (
    <>
      <Navbar />
      <div className="create-blog">
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Blog Title"
              name='title'
              value={createblogData.title}
              onChange={handleblog}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Blog Content"
              name='content'
              value={createblogData.content}
              onChange={handleblog}
              required
            />
          </div>
          <button type="submit">Post Blog</button>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
