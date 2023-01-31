import React from 'react';
import "./login.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carousel() {
  return (
    <MDBCarousel showControls  >
    <MDBCarouselItem 
      className=' d-block Carousel-1 '
      itemId={1} 
      src='https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' 
      alt='...' 
       />
    <MDBCarouselItem
      className='  d-block Carousel-1 '
      itemId={2}
      src='https://images.unsplash.com/photo-1515467410840-96a3cf21dbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
      alt='...' 
    />
    <MDBCarouselItem
      className=' d-block Carousel-1 '
      itemId={3}
      src='https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      alt='...'
    />
  </MDBCarousel>
  );
}
export default Carousel;