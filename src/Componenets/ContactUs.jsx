import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Card from'react-bootstrap/Card';
import pic from '../Images/login.jpg';


function ContactUs() {
  return (
    <>
    
    <Container fluid className='pt-5' style={{backgroundImage:`url(${pic})` , height: "100vh" ,textAlign:'center',width:"100%"}}>
        <Card className='p-4 m-auto mt-5 bg-dark ' style={{width:'40%',height:"60%" ,borderRadius:'5rem'}}>
        <h1 className='pt- text-primary'>Contact Us</h1>
    <Form className='m-1'>
        
       
      <Form.Group className="mb-3" controlId="forBasicName">
        
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="E-mail" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicMessage">
      <Form.Control as="textarea" rows={3} placeholder="Massage" />
      </Form.Group>
      <Button className="mt-2 "variant="primary" type="Submit">
        Send
      </Button>
      
    </Form>
    </Card>
    
    
    </Container>
    </>
  );
}

export default ContactUs;