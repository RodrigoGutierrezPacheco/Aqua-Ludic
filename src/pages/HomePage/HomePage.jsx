import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode,EffectCoverflow, Pagination } from "swiper";
import { EffectFlip, Navigation } from "swiper";

import Button from 'react-bootstrap/Button';
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div 	style={{backgroundImage:'url(images/fondo-gif3.gif)',borderTop:'-%'}}
		>
			{/* <video className="video" src="images/video-fondo.mp4" autoPlay loop muted/> */}
			<Carousel className="carrousel">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel1.jpeg"
          alt="Foto 1"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 1</h3>
          <p className="carrousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 2</h3>
          <p className="carrousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 3</h3>
          <p className="carrousel-text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		<div className="margin-top container1">
			<h1 className="title">El agua nos impulsa</h1>
			<h2 className="subtitle">Mas innovadores y seguros.</h2>
			<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsum porro laudantium animi repellat dolorum corporis nulla blanditiis, delectus quos quasi, nesciunt distinctio totam nostrum nisi consequatur quod fugit eveniet?</p>
			<motion.button className="button1" style={{border:'none',backgroundColor:'transparent'}} whileTap={{scale:0.9}} whileHover={{scale:1.1}}><Button href="/nosotros" style={{border:'3px solid blue', borderRadius:'2rem', color:'blue'}} variant="outline-primary button1 ">Mas sobre Nosotros</Button></motion.button>
		</div>
		<div className="container3">
			<h1 className="title2">Proyectos</h1>
			<motion.button className="button2" style={{border:'none',backgroundColor:'transparent'}} whileTap={{scale:0.9}} whileHover={{scale:1.1}}><Button href="/proyectos" style={{border:'3px solid blue', borderRadius:'2rem', color:'white',backgroundColor:'blue'}} variant="outline-primary button2">Ver Proyectos</Button></motion.button>

		</div>
		<div className="container3">
		<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
		</div>
		<div>
		</div>
    </div>
  );
}

export default HomePage;
