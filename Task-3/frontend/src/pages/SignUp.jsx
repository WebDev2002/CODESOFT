import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import API from '../axios/Axiosinstance';

function SignUp() {

    const navigation = useNavigate()

  const [signupData, setSignupData] = useState({
    username:'',
    email:'',
    password:''

  })

  const handlevalue = (e)=>{
    const {name , value} = e.target;
    setSignupData({
        ...signupData,
        [name]:value
    })
  }

  const sendData = async(signupData)=>{
    try {
       const res = await API.post('/signUp',signupData)
       const response = res.data.message;
          console.log(localStorage);
          
       if(response == 'Success'){
        navigation('/signin') 
       }
    } catch (error) {
       console.log(error);
       
    }
     
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
    sendData(signupData)

    setSignupData({
        username:'',
        email:'',
        password:''
    })
    
  };

  const goToSignIn = ()=>{
   navigation('/signin') 
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={signupData.username}
          onChange={handlevalue}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handlevalue}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handlevalue}
          required
        />

        <button type="submit">Sign Up</button>
        <a href="#" onClick={goToSignIn}>Already have an account</a>
      </form>
    </div>
  );
}

export default SignUp;
