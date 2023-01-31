import React, { useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {getAllBurgers} from '../actions/pizzaAction'
import { useDispatch, useSelector } from 'react-redux';
import '../Componenets/pizza.css';
import Loader from '../Componenets/Loader';
import Error from '../Componenets/Error';
import Burger from '../Componenets/Burger';

const BurgerScreen = () => {
  const dispatch = useDispatch();

  const burgerstate = useSelector((state) => state.getAllBurgerReducer);
  const { loading, burgers, error } = burgerstate;

  useEffect(() => {
    dispatch(getAllBurgers());
  }, [dispatch]);

  return (
    <>
      
        {loading ? (
         <Loader/>
        ) : error ? (
          <Error>Error while fetching{error}</Error>
          
        ) : (
          <Row className="row-1">
           
            {burgers.map((burger) => (
              <Col xs={12} sm={6} md={4} lg={4} className="pt-5">
                <Burger burger={burger} />
              </Col>
            ))}
          </Row>
        )}
     
    </>
  );
};




export default BurgerScreen;
