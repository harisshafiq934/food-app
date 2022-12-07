import React from "react";
import Burger from "../Componenets/Burger";
import burgers from "../Burgerdata";
import "../Componenets/pizza.css";

 function Burgerscreen() {
  return (
    <>
    
      <div className="row row-1 ">
        {burgers.map((burger) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div>
                <Burger burger={burger} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Burgerscreen;
