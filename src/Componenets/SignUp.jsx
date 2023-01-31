import React, {useState} from 'react';
import "./login.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loader from './Loader';
import Success from './Success';
import Error from './Error';


function Signup() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState =useSelector(state => state.registerUserReducer)
  const {error, success, loading} = registerState
  const dispatch=  useDispatch();

  const registerhandler = ()  => {
    if (password !== confirmPassword ){
      alert("password do not match");
    } else{
      const user ={name, email , password, confirmPassword }
      dispatch(registerUser(user));
    }
  }
  return (
    <>
      {loading && <Loader/>}
    
    <MDBContainer className="my-5 ">
    
      {success && <Success success="User Register Successfully"/> }
      {error && <Error error="Somthing went wrong"/>}

      <MDBRow>

        <MDBCol col='6' xs={12} sm={12} md={6}  lg={6}   className="mb-5 m-auto">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '100px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please Sign Up your account</p>


            <MDBInput wrapperClass='mb-4' label='User Name' id='form1' type='Name' 
            value={name}
            onChange={e =>setName(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form2' type='email'
             value={email}
             onChange={e =>setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='password' id='form3' type='password'
             value={password}
             onChange={e =>setPassword(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='Password'
             value={confirmPassword}
             onChange={e =>setConfirmPassword(e.target.value)}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-0 w-100 gradient-custom-2" color='warning' 
               onClick={registerhandler} >Sign Up</MDBBtn>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Are You have an account?</p>
              <Link to='/login'>
              <MDBBtn outline className='mx-2' color='warning'>
                Login
              </MDBBtn>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5 gradient-form"xs={12} sm={12} md={6}  lg={6}  >
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Signup;