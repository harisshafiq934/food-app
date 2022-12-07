import React from "react";
import Pizza from "../Componenets/Pizza";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pizzas from "../pizzadata";

import "../Componenets/pizza.css";

 function Homescreen() {
  return (
    <>
   
      <Row className="row-1 ">
        {pizzas.map((pizza) => {
          return (
            <Col xs={12} sm={6} md={4} lg={4} className="pt-5">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Homescreen;
