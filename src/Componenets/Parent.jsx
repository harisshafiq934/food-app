import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel';
import Category from './Category';
import Members from './Members';
import Work from './Work';
import Footer
 from './Footer';

export default function Parent() {
  return (
    <div>
        
      
      <Carousel />

      
      <Category />
      
      
      <Members />

       <Work/> 

      

     
    </div>
  )
}
