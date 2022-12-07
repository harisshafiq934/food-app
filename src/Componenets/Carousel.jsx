import React from 'react';
import "./login.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carousel() {
  return (
    <MDBCarousel showControls  className='Carousel-1'>
    <MDBCarouselItem 
      className=' d-block '
      itemId={1} 
      src='https://thumbs.dreamstime.com/z/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg' 
      alt='...' width="100%" height="360"
       />
    <MDBCarouselItem
      className='  d-block '
      itemId={2}
      src='https://thumbs.dreamstime.com/z/healthy-plant-based-fast-food-table-scene-overhead-view-wood-background-cauliflower-crust-pizzas-bean-burgers-mushroom-tacos-211965188.jpg'
      alt='...' width="100%" height="360"
    />
    <MDBCarouselItem
      className=' d-block '
      itemId={3}
      src='https://mdbootstrap.com/img/new/slides/043.jpg'
      alt='...' width="100%" height="360"
    />
  </MDBCarousel>
  );
}
export default Carousel;