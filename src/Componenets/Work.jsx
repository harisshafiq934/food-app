
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Front1 from '../Images/Front1.png';
import Front2 from '../Images/Front2.png';
import Front3 from '../Images/Front3.png';

import CardGroup from 'react-bootstrap/CardGroup';
import Front4 from '../Images/Front4.jpg';
import './login.css'


function Work() {
  return (
    <>
    <Container>
    
      <Row xs={1} sm={1} md={1} lg={1} className='m-auto '   >
        <img src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/banner-1.jpg' />
      <h4  style={{textAlign:"center",color:'#FED049'}}>HOW IT WORKS</h4>
      <h1 style={{textAlign:"center",color:'black',}}>Simple Process</h1>
     
      </Row>
    <Row  xs={1}sm={1} md={1} lg={3} style={{width:"100%"}} className='m-auto' >
    
    <Col className='m-auto'>

    <Card  className='work-card'>
      <Card.Img variant="top" src={Front1} style={{height:'10rem',width:'10rem'}} className='p-3' />
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title>Your Order</Card.Title>
        <Card.Text>
        Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card  className='work-card' >
      <Card.Img variant="top" src={Front2} style={{height:'10rem',width:'10rem'}} className='p-3' />
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title>Cash On Delivery</Card.Title>
        <Card.Text>
        Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card  className='work-card'>
      <Card.Img variant="top" src={Front3} style={{height:'10rem',width:'10rem'}}  className='p-3'  />
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title>Receive Order</Card.Title>
        <Card.Text>
        We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied .
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
   
    </Row>
   
    <br></br>
    <Row className="m-auto " xs={1} sm={1} md={1} lg={2} style={{width:"100%"}}>
        
        <Col className='mt-5 shadow p-3 mb-4  rounded white-color  ' >
        <h4 >PIZZA DELIVERY</h4>
        <h1>Get Started Today!</h1>
        <h3>Everything you need to build an amazing food restaurant responsive website.</h3>
        <p>Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
        </Col>
        
        <Col  >
        <img  className='front5 mt-3' src={Front4} />
        </Col>
    </Row>

  
    </Container>
   
    
 
    
    </>
  );
}


export default Work;