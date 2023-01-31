// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function Checkout() {
//   return (
//     <Form>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control type="text" placeholder="Firs Name" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridPassword">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control type="text" placeholder="Last Name" />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formGridAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor" />
//       </Form.Group>

//       <Row className="mb-3">
//       <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose...">
//             <option>Choose...</option>
//             <option>Lahore</option>
//           </Form.Select>
//         </Form.Group>

       

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Checkout;








import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector (state => state.placeOrderReducer)
  const {loading,error,success} = orderState
  const dispatch = useDispatch()
  const tokenHandler =(token)=>{
    dispatch(placeOrder(token,subTotal))
    console.log(token);
  }

  return (

    <>

    {loading && (<Loader/>)}
    {error && (<Error error="somthing went wrong"/>)}
    {success &&(<Success success="order place"/>)}
   
     <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey="pk_test_51MOdoIIqZWT7PwSE7t6eSzL9FZk2092ufZInhyhaGB3iiO0QpTsZaVT9fxc2VU9tVRMH6Ps5VH0anPVE8PMUNr00007RJyuuqN"
    currency="PKR"
    >
      <Button>pay Now</Button>
    </StripeCheckout>

    </>

  )
  
  }
export default Checkout;