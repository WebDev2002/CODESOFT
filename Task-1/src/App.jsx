import { Routes, Route } from 'react-router-dom'
 import Home from './pages/Home'
 import About from './pages/About'
 import Skill from './pages/Skill'
 import Project from './pages/Project'
 import Contact from './pages/Contact'
 import NotFound from './pages/NotFound'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
