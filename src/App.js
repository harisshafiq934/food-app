import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componenets/Login";

import Parent from "./Componenets/Parent";
import Homescreen from "./Screens/Homescreen";
import Burgerscreen from "./Screens/Burgerscreen";

import ContactUs from "./Componenets/ContactUs";
import Signup from "./Componenets/SignUp";
import Navbar from "./Componenets/Navbar"
import Footer from "./Componenets/Footer";
import Cartscreen from "./Screens/Cartscreen";
import Checkout from "./Componenets/Checkout";
import Orderscreen from "./Screens/Orderscreen";

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
          <Route path="/cart" element={<Cartscreen/>}/>
          <Route path="/paynow" element={<Checkout/>} />
          <Route path="/orders" element={<Orderscreen />} />
        </Routes>

        <Footer />
      </div>


      {/* <Pizzas/> */}
    </div>
  );
}

export default App;
