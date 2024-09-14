import React from 'react'
import { useNavigate } from 'react-router-dom'
function Herosection() {

    const navigation = useNavigate()
  const createblog = ()=>{
    navigation('/create-blog')
 }
  return (
    <>
          <section className="hero-section">
    <h1>Let your passions shine through.</h1>
    <h5>Make your blog shine with minimal effort.</h5>
    <button onClick={createblog} className='main-btn'>Create Blog</button>
  </section>
    </>
  )
}

export default Herosection