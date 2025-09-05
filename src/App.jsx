import Home from "./Components/Home"
import About from "./Components/About/About"
import Products from "./Components/Products/Products"
import Signup from "./Components/Auth/Signup"
import Login from "./Components/Auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
 

  return (
   <Router>

  

    <Routes>
    <Route path="/"   element={<Home />}  />
    <Route path="/About"   element={<About />}  />
    <Route path="/Products"   element={<Products />}  />
     <Route path="/Signup"   element={<Signup />}  />
      <Route path="/Login"   element={<Login />}  />





    </Routes>






   </Router>
  )
}

export default App
