
import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {FaMinusCircle, FaPlusCircle, FaTrash} from 'react-icons/fa'
import { addToCart , deleteFromCart} from '../actions/cartActions'
import {Link} from "react-router-dom"
import Checkout from '../Componenets/Checkout'
const Cartscreen = () => {
  
    const cartState = useSelector (state => state.cartReducer)
    const cartItems = cartState.cartItems;
 const dispatch = useDispatch();
 const subTotal = cartItems.reduce((x,item)=> x + item.price,0)
    return (


    <>

    <Container>
        <Row>
            <Col md ={6}>
             <h1>Cart Items</h1>
             <Row>
                {cartItems.map((item) =>(
                        <>
                        <Col md={7}> 
                        <h6>{item.name} [{item.varient}]</h6>
                        <h6>
                            
                            price : {item.quantity} X {item.prices[0][item.varient]} =  {item.price} </h6>
                            <h6>Quantity  
                                : &nbsp;<FaMinusCircle
                                style={{cursor:"pointer"}}
                                onClick ={() =>{dispatch(addToCart(item,item.quantity -1, item.varient))}}
                                /> &nbsp;
                                 {item.quantity}
                                 &nbsp;
                                 <FaPlusCircle
                                  style={{cursor:"pointer"}}
                                  onClick ={() =>{dispatch(addToCart(item,item.quantity +1, item.varient))}}
                                 />
                                 </h6>
                        </Col>
                        <Col md= {5} className = 'p-3 m-auto'>
                            <img style={{height:'100px'}} alt={item.name} src = {item.image}/>
                           <FaTrash
                             style={{cursor:"pointer" , marginLeft:"20px"}}
                             onClick ={() =>{dispatch(deleteFromCart(item))}}
                           />
                        </Col>
                        <hr/>
                        </>
                    ))
                }
             </Row>
            </Col>
            <Col md ={4}>
                <h1>Payment info</h1>
                <h4>Sub Total</h4>
                <h4>RS : {subTotal}/-</h4>
                
                <Checkout subTotal={subTotal}/>
            </Col>
        </Row>
    </Container>



    </>
  )
}

export default Cartscreen