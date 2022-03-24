import React from 'react';
import './Home.css';
import NavBar from "../Nav/NavBar";
import { Container, Row, Col ,Form ,Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import * as Icon from 'react-bootstrap-icons';
import bannerImg from "../../assets/images/banner-img1.png";
import treeImg from "../../assets/images/tree.png";
import puloneImg from "../../assets/images/pulone.png";
import book1Img from "../../assets/images/book1.png";
import book2Img from "../../assets/images/book2.png";
import book3Img from "../../assets/images/book3.png";
import book4Img from "../../assets/images/book4.png";
import book5Img from "../../assets/images/book5.png";
import bookeng1Img from "../../assets/images/book-eng1.png";
import bookeng2Img from "../../assets/images/book-eng2.png";
import bookeng3Img from "../../assets/images/book-eng3.png";
import bookeng4Img from "../../assets/images/book-eng4.png";
import bookeng5Img from "../../assets/images/book-eng5.png";

function Home() {
  return (
    <Container fluid>
        <Container>
          <NavBar bg="light"/>
        </Container>
        <section className="home pt-5">
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
                <Form id='search' className='p-1 col-md-10 mx-auto'>
                      <Form.Control type="email" placeholder="Explore More Books" className='text-center'/>
                      <Icon.Search />
                </Form>
                </Col>
                <Col md={2} className="py-3">
                  {<img src={puloneImg} /> }
                </Col>
            </Row>
            <Container className='bookLists pt-5'>
              <h4>Myanmar</h4>
              <Carousel variant="dark" className='my-5' indicators={false}>
                <Carousel.Item interval={50000}>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book1Img} alt="First slide" />
                    <label>၀ါးပင်ငယ်ငယ် ချစ်စဖွယ်</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book2Img} alt="First slide" />
                    <label>ပြင်ပရုပ်သွင်</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book3Img} alt="First slide" />
                    <label>အိုအေစစ်လေး</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book4Img} alt="First slide" />
                    <label>၀တ်ရည်လပ်ကီး</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book5Img} alt="First slide" />
                    <label>ပီနိုကီယိုနဲ့ ယမင်း</label>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={50000}>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book1Img} alt="First slide" />
                    <label>Foxy Jump</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book2Img} alt="First slide" />
                    <label>Heart In A Box</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book3Img} alt="First slide" />
                    <label>အိုအေစစ်လေး</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book4Img} alt="First slide" />
                    <label>၀တ်ရည်လပ်ကီး</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={book5Img} alt="First slide" />
                    <label>ပီနိုကီယိုနဲ့ ယမင်း</label>
                  </Col>
                </Carousel.Item>
              </Carousel>
            </Container>
            <Container className='bookLists'>
              <h4>English</h4>
              <Carousel variant="dark" className='py-5' indicators={false}>
              <Carousel.Item interval={50000}>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng1Img} alt="First slide" />
                    <label>Foxy Jump</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng2Img} alt="First slide" />
                    <label>Heart In A Box</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng3Img} alt="First slide" />
                    <label>PSD Box Mockup</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng4Img} alt="First slide" />
                    <label>Foxy Jump</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng5Img} alt="First slide" />
                    <label>Fernando</label>
                  </Col>
                </Carousel.Item>
                <Carousel.Item interval={50000}>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng1Img} alt="First slide" />
                    <label>၀ါးပင်ငယ်ငယ် ချစ်စဖွယ်</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng2Img} alt="First slide" />
                    <label>ပြင်ပရုပ်သွင်</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng3Img} alt="First slide" />
                    <label>PSD Box Mockup</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng4Img} alt="First slide" />
                    <label>Foxy Jump</label>
                  </Col>
                  <Col md={2} className="px-2">
                    <img className="d-block w-100" src={bookeng5Img} alt="First slide" />
                    <label>Fernando</label>
                  </Col>
                </Carousel.Item>
              </Carousel>
            </Container>
            <div className='d-flex justify-content-center pb-5'>
              <Button className="btn btn-primary seeAllBtn" href="#">
                      See All Books
                </Button>
            </div>
        </Container>
    </Container>
  );
}

export default Home;
