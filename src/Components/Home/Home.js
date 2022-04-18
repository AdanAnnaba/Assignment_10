import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import slide1 from '../../Assets/image/slide1.jpg';
import slide2 from '../../Assets/image/slide2.jpg';
import slide3 from '../../Assets/image/slide3.jpg';
import insurance from '../../Assets/image/insurance.JPG'
import './Home.css';

const Home = () => {
    return (
<div>
<div className='slide'>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div>
  <Services></Services>
</div>
<div className='insurance'>
  <div>
    <h1>What is dental insurance?</h1>
    <p>Want to know more about dental insurance before you take out your policy? You can find information about our insurance policies, how it benefits you and what treatment you can get.</p>
    <a href="https://www.youtube.com/watch?v=2q7uFSYdtUc">Learn more about dental insurance</a>
  </div>
  <div>
    <img src={insurance} alt="" />
  </div>
</div>
</div>
    );
};

export default Home;