import React from 'react'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import './components.css'
import API from '../axios/Axiosinstance'

function Navbar() {
  // const [isAuth, setIsAuth] = useState(false);
  const navigation = useNavigate()

  // useEffect(()=>{
  //   const accessToken = Cookies.get('AccessToken')
  //   if(accessToken){
  //     setIsAuth(true)
  //     console.log(accessToken);
      
  //   }
  // }, [])

  const HandleLogout = async()=>{
   try {
      const logout = await API.post('/logOut')
      localStorage.removeItem('accessToken');
      console.log(logout.data);
      navigation('/signin')
   } catch (error) {
     console.log(error);
      
   }
    // const accessToken = Cookies.get('AccessToken')
    // if(accessToken){
    //   setIsAuth(true)
    //   console.log(accessToken);
      
    // }
    // console.log(accessToken);
  }

  return (
<>
  <nav>
    <div className="logo">
      <h1>Blogger</h1>
    </div>
    <ul className="nav-links">
   
        <li><button onClick={HandleLogout}>Logout</button></li>
   
     
           <li><Link to="/signin">Sign In</Link></li>
           <li><Link to="/signup">Sign Up</Link></li>

      
    </ul>
  </nav>
</>

  )
}

export default Navbar