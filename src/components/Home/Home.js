import React from 'react';
import NavBar from "../Nav/NavBar";
import { Container, Row, Col ,Form ,Button } from "react-bootstrap";
import bannerImg from "../../assets/images/banner-img1.png";
import treeImg from "../../assets/images/tree.png";
import puloneImg from "../../assets/images/pulone.png";
import './Home.css';

function Home() {
  return (
    <Container fluid>
        <Container>
          <NavBar bg="light"/>
        </Container>
        <section className="home py-5">
            <Row className='mx-auto container'>
                <Col md={6} className="py-5">
                <h1>Third Story Project</h1>
                <p className='col-lg-8 py-5'>The Third Story Project creates children's books  with a positive message for children in Myanmar, written and illustrated by Myanmar artists. </p>
                <Button className="btn btn-primary" href="/about">
                    Read More
                </Button>
                </Col>
                <Col md={6} className="pb-5 mb-5">
                  {<img src={bannerImg} /> }
                </Col>
            </Row>
        </section>
        <Container fluid className="ourBooks">
            <Row className='mx-auto container'>
                <Col md={2} className="py-3">
                  {<img src={treeImg} /> }
                </Col>
                <Col md={8} className="py-3 px-5 text-center bannerText">
                <h2>Our Books</h2>
                <p className="p-3">Our books are written by Myanmar authors and illustrated by Myanmar illustrators for a Myanmar audience.  They are first and foremost entertaining and fun to read, but they also have important messages addressing peace, tolerance, diversity, girl empowerment, environment, disability rights and child rights. </p>
                <Form id='search' className='p-3 col-md-10 mx-auto'>
                      <Form.Control type="email" placeholder="Explore More Books" className='text-center'/>
                </Form>
                </Col>
                <Col md={2} className="py-3">
                  {<img src={puloneImg} /> }
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Home;
