import React, { useState } from "react";
import "./pizza.css";
import Button from "react-bootstrap/Button";

import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Burger({ burger }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("with cheese");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const add = () => {
    dispatch (addToCart(burger, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    
    <div className="back-ground shadow-lg p-3 mb-2  bg-white  rounded  " >
      
     <div onClick={handleShow}  >
     <h1  style={{display:'flex',justifyContent:'center'}}>{burger.name}</h1>
      <center>
      <img 
        src={burger.image}
        
        style={{ height: "150px", width: "150px", borderRadius:'10%',  }}
      />
      </center>
      
     </div>
      <div className="flex-container w-100" style={{}}>
        <div className="w-100 m-1 text-warning">
          <p>Variants</p>
          <select
           className="form-select"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {burger.varient.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1 text-warning">
          <p>Quantity</p>
          <select 
          className="form-select"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
              
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
            
          </select>
        </div>
        
      </div>
     
      <div >
        <div className="m-1 w-100 text-warning " style={{ display:'flex',justifyContent:'center'}}>
          {/* <h6 className="mt-1">price:{burger.prices[0][varient] * quantity} RS/-</h6> */}
          {<h6 className="mt-1"> price:{burger.prices[0][varient] * quantity}</h6>}
        </div>
        
       
       
        <div className="m-1 w-100" style={{ display:'flex',justifyContent:'center'}}>
          <Button onClick={add} variant="outline-warning" 
           >Add to cart</Button>
        </div>
      </div>
      
   

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <center>
         <img src={burger.image} alt="" className="img-fluid" style={{height:"150px", width:"150px", borderRadius:'8%' }}/> </center>
         <p>{burger.description}</p>
        
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose} >Close</Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Burger;













