import React from "react";
//import Header from "../header";
import Header from '../header/header'
import Footer from "../footer";
import "./../../styles/common.scss";
import './../../styles/home.scss';
import './../../styles/Grid.scss';

import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import { Link } from 'react-router-dom';
import "pure-react-carousel/dist/react-carousel.es.css";

function Home(props) {
  const { banners, categories } = props;
  return (
    
    <div className="container">
      <Header />
      <main>
        <div className="row home-tile clearfix">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={banners && banners.length}
            isPlaying={true}
          >
            <div className="slide-container">
              <div className="slideshow-container">
                <Slider>
                  {banners && banners.map((item,i) => {
                    return (
                      <Slide key={item.id} index={i} className="mySlides"><img src={item.bannerImageUrl} alt={item.bannerImageAlt}/></Slide>
                    )})}
                </Slider>

                <div className="slides-dot">
                  {banners && banners.map((item,i)=> {
                    return(
                      <Dot key={item.id} slide={i} className="dot" />
                  )})}
                </div>
                <ButtonBack aria-label="previous" className="prev">Back</ButtonBack>
                <ButtonNext aria-label="next" className="next">Next</ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>

        {categories && categories.map((item, i) => {
          return(
            i%2 === 0 ? 
          <div key={item.id} className="row home-tile">
            <div class="bottom-row"></div>
            <figure>
            <div className="col span-1-of-2 left-image">
            <img src={item.imageUrl} alt={item.key} />
            </div>
            <div className="col span-1-of-2 category-info">
              <h2>{item.name}</h2>
              <figcaption>{item.description}</figcaption>
              <Link to={`/plp/${item.key}`} className="btn-title" title={item.name}>Explore {item.key}</Link>
            </div>
            </figure>
          </div>
          : 
          <div key={item.id} className="row home-tile">
             <div class="bottom-row"></div>
            <figure>
            <div className="col span-1-of-2 category-info">
              <h2>{item.name}</h2>
              <figcaption>{item.description}</figcaption>
              <Link to={`/plp/${item.key}`}className="btn-title" title={item.name}>Explore {item.key}</Link>
            </div>

            <div className="col span-1-of-2 left-image">
                <img src={item.imageUrl} alt={item.key} />
            </div>
            </figure>
           
          </div>
        )}) }
      </main>
      <Footer />
    </div>
  );
}

export default Home;
