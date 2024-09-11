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
    <h1>Header</h1>
    <h5>Sub-Header</h5>
    <button onClick={createblog} className='main-btn'>Create Blog</button>
  </section>
    </>
  )
}

export default Herosection