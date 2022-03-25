import React from 'react';
import './Customers.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from "react-bootstrap";
import boxItem from "../../assets/images/bgBox.png";
import customer1Img from "../../assets/images/customer1.png";
import customer2Img from "../../assets/images/customer2.png";
import customer3Img from "../../assets/images/customer3.png";
function Customers() {
    return(
        <Container fluid className="ourCustomers text-center">
            {<img src={boxItem} className="bgItem3" />}
            <Container className='py-5'>
                <h2>Happy Customers</h2>
                <Carousel className='my-5'>
                    <Carousel.Item interval={20000}>
                    <Row>
                        <Col md={4} className="px-5">
                        <img src={customer1Img} alt="First slide" />
                        </Col>
                        <Col md={4} className="px-5">
                        <img src={customer2Img} alt="First slide" />
                        </Col>
                        <Col md={4} className="px-5">
                        <img src={customer3Img} alt="First slide" />
                        </Col>
                    </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={20000}>
                    <Row>
                        <Col md={4} className="px-5">
                        <img src={customer1Img} alt="First slide" />
                        </Col>
                        <Col md={4} className="px-5">
                        <img src={customer2Img} alt="First slide" />
                        </Col>
                        <Col md={4} className="px-5">
                        <img src={customer3Img} alt="First slide" />
                        </Col>
                    </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
    );
}

export default Customers;