import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { BsFacebook, BsInstagram} from "react-icons/bs";

 function Footer() {
  return (

    <>
    
    <MDBFooter  bgColor='dark' className='text-center text-lg-start text-muted Footer footer-1'>
      <section className='d-flex justify-content-center justify-content-lg-between  border-bottom'>
      

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3 ' />
                Address
              </h6>
              <p>
              103 North Loundoun Street., Winchester, VA
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>WE ARE OPEN</h6>
              <p>
                
              Mon–Fri: 9am-10pm
              </p>
              <p>
              Sat: 10pm-4am
              </p>
              <p>
              Sun: 10am-7pm
              </p>
           
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>RESERVATION</h6>
              <p>
              +63 9202740366
              </p>
              <p>
              help@dinery.com
              </p>
            
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto ' >
              <h6 className='text-uppercase fw-bold mb-4'>STAY CONNECTED</h6>
            
              <p >
              <BsFacebook  />
              <BsInstagram style={{marginLeft:"10px"}}/>
               
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright 2022 © 
        
      </div>
    </MDBFooter>
    </>
  );
}
export default Footer;