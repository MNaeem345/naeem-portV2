import React from 'react';
import { Container, Card } from '@material-ui/core';
import "../components/Projects.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import cryptoview from "../assets/cryptoview.mp4";
import pokeshop from "../assets/pokeshop.mp4";
import todo from "../assets/todoapp.mp4";
import weather from "../assets/weatherapp.mp4";

function Projects() {
  return (
    <section id="projects">
    <div className="project-container">
    <Container maxWidth="md">
      <h1 className="ab-me">Projects</h1>
    </Container>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='carousel'>
          <video src={cryptoview} alt="slide_image" autoPlay controls className='vid1' />
          <h1 className='proj-title'>Crypto View</h1>
          <p className='proj-description'>Used React, JSX and RapidAPI to create a web application 
                    that shows all of the cryptocurrencies and all the statistics and trends that are
                     available to it right now, as well as news regarding the cryptocurrency.</p>
            <a href="https://github.com/MNaeem345/CryptoView" target="_blank"><button className='button2'>Github</button></a>
        </SwiperSlide>
        <SwiperSlide className='carousel'>
          <video src={pokeshop} alt="slide_image" autoPlay controls className='vid1'/>
          <h1 className='proj-title'>Poke Shop</h1>
          <p className='proj-description'>Designed a multi-page web application using React, 
                    Bootstrap, and CSS for the Front-End and PostgreSQL and Flask for the Back-End, to utilize
                     a Pokemon API where the user can add, or remove a Pokemon to and from their cart which can
                      then be viewed on their profile.</p>
            <a href="https://github.com/MNaeem345/React-Poke-Shopping-Cart/tree/main/react-poke-shopping-cart" target="_blank"><button className='button2'>Github</button></a>
        </SwiperSlide>
        <SwiperSlide className='carousel'>
          <video src={weather} alt="slide_image" autoPlay controls className='vid1'/>
          <h1 className='proj-title'>Weather App</h1>
          <p className='proj-description'>Utilizing React, Tailwind, JavaScript, and an OpenWeather
                     API to create a Weather App that gives the weather for locations and can provide the weather 
                     of a user's location.</p>
        <a href="https://github.com/MNaeem345/weather-app" target="_blank"><button className='button2'>Github</button></a>
        </SwiperSlide>
        <SwiperSlide className='carousel'> 
          <video src={todo} alt="slide_image" autoPlay controls className='vid1'/>
          <h1 className='proj-title'>ToDo list App</h1>
          <p className='proj-description'>Created a ToDo list application with React and CSS
                     that can add, remove, update and check off a list.</p>
        <a href="https://github.com/MNaeem345/To-do-React-App" target="_blank"><button className='button2'>Github</button></a>
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </section>
  )
}

export default Projects;