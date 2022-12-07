import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  
  Link
} from "react-router-dom";

import "./category.css";

export default function Category() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h6 className="category-title"> TOP FOODS</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="category-title">Our Categories</h3>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={2} lg={2} xl={4} className="row-2">
          <Col>
            <Link to="/homescreen">
              <Card className="card-2">
                <Card.Img
                  className="card-1  "
                  src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/Layer256-1.png"
                />
                <h3 className="category-title">Pizza</h3>
              </Card>
            </Link>
          </Col>

          <Col>
         
            <Card className="card-2">
              <Card.Img
                className="card-1"
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/1qLayer-1.png"
                alt=""
              />
              <h3 className="category-title">Broast</h3>
            </Card >
          </Col>
          <Col>
            <Card className="card-2">
              <Card.Img
                className="card-1"
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sa1.png"
                alt=""
              />
              <h3 className="category-title">Chicken</h3>
            </Card>
          </Col>
        </Row>

        <br></br>

        <Row xs={1} sm={2} md={2} lg={2} xl={4} className="row-2">
          <Col>
          <Link to="/burgerscreen">
            <Card className="card-2">
              <Card.Img
                className="card-1"
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/pngwing.png"
                alt=""
              />
              <h3 className="category-title">Burgers</h3>
            </Card>
            </Link>
          </Col>
          <Col>
            <Card className="card-2">
              <Card.Img
                className="card-1"
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sssssa1.png"
                alt=""
              />
              <h3 className="category-title">Sandwiches</h3>
            </Card >
          </Col>

          <Col>
            <Card className="card-2">
              <Card.Img
                className="card-1"
                src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/asasLayer-1.png"
                alt=""
              />
              <h3 className="category-title">Desserts</h3>
            </Card>
          </Col>
        </Row>
      </Container>

     
    </>
  );
}
