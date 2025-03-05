import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Signin from "./pages/Signin"
import Profile from "./pages/profile"
import Signup from "./pages/signup"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      
          <Route path="/" element = { <Home/>} />
          <Route path="/About" element = { <About />} />
          <Route path="/Profile" element = { <Profile/>} />
          <Route path="/Signin"element = { <Signin />} />
          <Route path="/Signup" element = { <Signup />} />

          </Routes>
    
    
    </BrowserRouter>
  )
}
