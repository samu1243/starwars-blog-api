import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
    return (
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block  slider-img"
            src="https://starwarsblog.starwars.com/wp-content/uploads/2022/03/inside-intel-coruscant-planet.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Discover Planets!</h3>
            <p>Every single planet that you can think of we have them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="https://de.web.img3.acsta.net/r_1280_720/newsv7/16/04/29/17/02/483146.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="carousel-title">Discover amazing ships!</h3>
            <p>All the ships, from little to big. From civilian use to warships</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-ch-7-concept-art-04_ee57744c.jpeg?region=0%2C0%2C1290%2C725"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="carousel-title">Discover interesting Characters!</h3>
            <p>
              Get immersed in the lore of Star Wars and their characters
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default Slider