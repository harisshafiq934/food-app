import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (

    <div> 
        <center>
        <Spinner animation="border" variant="warning" style={{height:'100px', width:'100px'}} />
        </center>
        </div>
  )
}

export default Loader