import React from 'react'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import './components.css'
import API from '../axios/Axiosinstance'

function Navbar() {
  const navigation = useNavigate()

  const HandleLogout = async()=>{
   try {
      const logout = await API.post('/logOut')
      localStorage.removeItem('accessToken');
      console.log(logout.data);
      navigation('/')
   } catch (error) {
     console.log(error);
      
   }
  
  }

  const isLogin = !!localStorage.getItem('accessToken')

  return (
<>
  <nav>
    <div className="logo">
      <h1>Blogger</h1>
    </div>
    <ul className="nav-links">
      {isLogin ? (
 <li><button onClick={HandleLogout}>Logout</button></li>
      ):(
        <>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </>
      )}
    </ul>
  </nav>
</>

  )
}

export default Navbar