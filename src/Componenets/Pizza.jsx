import React, { useState } from "react";
import "./pizza.css";
import Button from "react-bootstrap/Button";
import Image from '../Images/pizza.png'

function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  return (
    <div className="back-ground shadow-lg p-3 mb-2 bg-white  rounded " style={{margin:'30px'}}>
      <center><h1 >{pizza.name}</h1>
      <img
        src={Image}
        
        style={{ height: "150px", width: "150px" }}
      />
      </center>
      <div className="flex-container w-100" style={{}}>
        <div className="w-100 m-1 text-warning">
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1 text-warning">
          <p>Quantity</p>
          <select
            className="form-control"
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
      <div className="flex-container">
        <div className="m-1 w-100 text-warning">
          <h1 className="mt-1">price:{pizza.price[0][varient] * quantity} RS/-</h1>
        </div>
        <div className="m-1 w-100">
          <Button variant="outline-warning">Add to cart</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
