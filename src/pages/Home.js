import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';



function Home() {
  return (

    <Container fluid>
      <Row>
        <Col className='bg-gray'>
          <Nav className="justify-content-end" activeKey="/home">



            <Nav.Item>
              <Nav.Link className='color-black' href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='color-black' eventKey="link-1">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='color-black' eventKey="link-2">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='color-black' eventKey="link-2">Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Checkout</Nav.Link>
                <Nav.Link href="#action1">Shopping Cart</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Row>
        <Col md='2'>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav>
        </Col>
        <Col md='10'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>Laptop 20% Off</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Laptop 20% Off</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Laptop 20% Off</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Laptop 20% Off</Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <h4>Featured Products</h4>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Product Description
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Product Description
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Product Description
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Product Description
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md='4'>
          <h5>About React Ecommerce</h5>
          <p>Build WIth React Laravel</p>
        </Col>
        <Col md='2'>
          <h5>Support</h5>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav>
        </Col>
        <Col md='2'>
          <h5>Support</h5>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav>
        </Col>
        <Col md='4'>
          <h5>Address</h5>
          <p>Build WIth React Laravel</p>
        </Col>
      </Row>

      <Row>
        <Col className='bg-gray'>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link className='color-black' href="/home">&copy; React Ecommerce. All Right Reserved</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

    </Container>
  )

}

export default Home;