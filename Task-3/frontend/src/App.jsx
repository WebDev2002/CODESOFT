
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateBlog from "./pages/CreateBlog"
import PostBlog from "./pages/PostBlog"

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/post-blog" element={<PostBlog/>} />
      </Routes>
      {/* <PostBlog/> */}
    </>
  )
}

export default App
