import { Hidden } from '@mui/material'
import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
//import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/js/bootstrap.js';

const Dashboard = () => {
  return (


    // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src="./images/pizza 2.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="./images/pizza 3.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="arousel-item">
    //       <img src="./images/Pizza1.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="arousel-item">
    //       <img src="./images/pizza4.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //   </div>
    // </div>

    <div style={{ display: 'block', width: "100%" , padding: 30, overflow: Hidden }}>
	<h4>React-Bootstrap Carousel Component</h4>
	{/* <Carousel>
		<Carousel.Item interval={1500}>
		<img className="d-block w-100" src="./Images/pizza 3.jpg" alt="Image One"/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img className="d-block w-100" src="./Images/pizza 2.jpg" alt="Image Two"/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel> */}
    <img className="d-block w-100" src="./Images/pizza 3.jpg" alt="Image One" style={{ overflow: Hidden }}/>
    {/* <img className="d-block w-100" src="./Images/pizza 2.jpg" alt="Image Two"/> */}
	</div>
	)
}


export default Dashboard