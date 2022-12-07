
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./login.css"
// import pic from '../Component/Images/team.png'

function Members() {
  return (
    <>
    <Container className='mt-5 ' >
      
    <Row xs={1} md={1} lg={1} >
        <Col>
      <h4  style={{textAlign:"center",color:'#FED049'}}>Team Members</h4>
      </Col>
      </Row>
<Row>
    <Col>
      <h1 style={{textAlign:"center"}}>Meet Our Best Team</h1>
      </Col>
      </Row>
      <hr  style={{textAlign:"center",color:'#FED049'}}/>
      <Row className='members-1'  xs={1} sm={1} md={2} lg={4}>
    <Col >
    <Card style={{ border:"none" }}>
      <Card.Img variant="top" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team1.png'  />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>Asad</Card.Title>
        <Card.Text>
        Senior Chef
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ border:"none"  }}>
      <Card.Img variant="top" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team2.png' />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>Asad</Card.Title>
        <Card.Text>
        Senior Chef
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ border:"none"  }}>
      <Card.Img variant="top" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team3.png' />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>Asad</Card.Title>
        <Card.Text>
        Senior Chef
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ border:"none" }}>
      <Card.Img variant="top" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team4.png' />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>Asad</Card.Title>
        <Card.Text>
        Senior Chef
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  );
}

export default Members;