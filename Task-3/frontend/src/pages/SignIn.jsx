import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import API from '../axios/Axiosinstance';

function SignIn() {

    const navigation = useNavigate()

  const [signinData , setSigniData] = useState({
     email:'',
     password:''
  })

  const handlevalue = (e)=>{
      const {name, value} = e.target
      setSigniData({
        ...signinData,
        [name]:value
      })
  }

  const sendData = async(signinData) =>{
      try {
        const res = await API.post('/signIn', signinData, { withCredentials: true })
        localStorage.setItem('accessToken', res.data.data.AccessToken);
        console.log(res.data);
           if(res.data.statusCode==200){
             navigation('/create-blog')
             console.log(res.data);
            
           }
      } catch (error) {
        console.log(error);
        
      }
        
        
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(signinData);
   sendData(signinData)

   setSigniData({
    email:'',
    password:''
   })
   
  };

  const goToSignUp = ()=>{
    navigation('/signup')
  }

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={signinData.email}
          onChange={handlevalue}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={signinData.password}
          onChange={handlevalue}
          required
        />

        <button type="submit">Sign In</button>

           <a href="" onClick={goToSignUp}>I don't have an account</a>
        
      </form>
    </div>
  );
}

export default SignIn;
