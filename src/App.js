import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Componenets/Login";

import Parent from "./Componenets/Parent";
import Homescreen from "./Screens/Homescreen";
import Burgerscreen from "./Screens/Burgerscreen";
import Broast from "./Componenets/Broast";
import ContactUs from "./Componenets/ContactUs";
import Signup from "./Componenets/SignUp";
import Navbar from "./Componenets/Navbar"
import Footer from "./Componenets/Footer";
function App() {
  return (
    <div>

      <div>
        <Navbar/>
        <Routes>
            
        <Route path="/" element={<Parent />} />
        <Route path="/homescreen" element={<Homescreen/>}/>
        <Route path="/burgerscreen" element={<Burgerscreen/>}/>
        <Route path="/contactus"  element={<ContactUs/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
