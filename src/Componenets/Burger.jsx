import React, { useState } from "react";
import "./pizza.css";
import Button from "react-bootstrap/Button";

function Burger({ burger }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  return (
    <div>
      <h1>{burger.name}</h1>
      <img 
        src={burger.image}
        className="rounded float-left  img-sc"
        style={{ height: "150px", width: "150px" }}
      />
      <div className="flex-container w-100" style={{}}>
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {burger.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
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
        <div className="m-1 w-100">
          <h1>price:{burger.price[0][varient] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <Button variant="outline-danger">Add to cart</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Burger;
