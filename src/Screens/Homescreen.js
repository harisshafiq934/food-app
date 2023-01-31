import React, { useEffect } from 'react';
import Pizza from '../Componenets/Pizza';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllPizzas } from '../actions/pizzaAction';
import { useDispatch, useSelector } from 'react-redux';
import '../Componenets/pizza.css';
import Loader from '../Componenets/Loader';
import Error from '../Componenets/Error';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      
        {loading ? (
         <Loader/>
        ) : error ? (
          <Error>Error while fetching{error}</Error>
          
        ) : (
          <Row className="row-1">
            {pizzas.map((pizza) => (
              <Col xs={12} sm={6} md={4} lg={4} className="pt-5">
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
     
    </>
  );
};

export default HomeScreen;
