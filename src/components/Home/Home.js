import React from 'react';
import NavBar from "../Nav/NavBar";
import { Container, Row, Col ,Button } from "react-bootstrap";
import bannerImg from "../../assets/images/banner-img1.png";
import './Home.css';

function Home() {
  return (
    <Container fluid className="home">
        <NavBar bg="light"/>
        <Container className="py-5">
            <Row>
                <Col md={6} className="py-5">
                <h1>Third Story Project</h1>
                <p className='col-lg-8 py-5'>The Third Story Project creates children's books  with a positive message for children in Myanmar, written and illustrated by Myanmar artists. </p>
                <Button className="btn btn-primary" href="/about">
                    Read More
                </Button>
                </Col>
                <Col md={6} className="pb-5 mb-5">
                  {<img className="TPIRobot" src={bannerImg} /> }
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Home;
