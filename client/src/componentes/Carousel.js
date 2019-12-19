import React, { Component } from "react";
import Slider from "react-slick";
import Amsterdam from "./imagenes-ciudades/Amsterdam.jpg";
import Antalya from "./imagenes-ciudades/Antalya.jpg";
import Bangkok from "./imagenes-ciudades/Bangkok.jpg";
import Barcelona from "./imagenes-ciudades/barcelona.jpeg";
import Dubai from "./imagenes-ciudades/Dubai.jpg";
import Istanbul from "./imagenes-ciudades/Istanbul.jpg";
import KualaLumpur from "./imagenes-ciudades/KualaLumpur.jpg";
import London from "./imagenes-ciudades/London.jpg";
import NewYork from "./imagenes-ciudades/NewYork.jpg";
import Paris from "./imagenes-ciudades/Paris.jpg";
import Singapore from "./imagenes-ciudades/Singapore.jpg";
import Tokyo from "./imagenes-ciudades/Tokyo.jpg";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      slidesToShow: 1,
      dots: true,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,

    };
    return (
      <div>
        <h2 className="carousel-title">Popular  Mytineraries:</h2>
        <Slider {...settings}>
          <div>
            <img src={Barcelona} alt="Barcelona"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Barcelona</h4>
            </div>
          </div>
          <div>
            <img src={NewYork} alt="New York"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">New York</h4>
            </div>
          </div>
          <div>
            <img src={Amsterdam} alt="Amsterdam"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Amsterdam</h4>
            </div>
          </div>
          <div>
            <img src={Paris} alt="Paris"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Paris</h4>
            </div>
          </div>
          <div>
            <img src={London} alt="London"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">London</h4>
            </div>
          </div>
          <div>
            <img src={Tokyo} alt="Tokyo"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Tokyo</h4>
            </div>
          </div>
          <div>
            <img src={Dubai} alt="Dubai"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Dubai</h4>
            </div>
          </div>
          <div>
            <img src={Istanbul} alt="Istanbul"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Istanbul</h4>
            </div>
          </div>
          <div>
            <img src={Antalya} alt="Antalya"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Antalya</h4>
            </div>
          </div>
          <div>
            <img src={Bangkok} alt="Bangkok"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Bangkok</h4>
            </div>
          </div>
          <div>
            <img src={KualaLumpur} alt="KualaLumpur"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Kuala Lumpur</h4>
            </div>
          </div>
          <div>
            <img src={Singapore} alt="Singapore"></img>
            <div style={{ width: 150 }}>
              <h4 className="carousel-subtitle">Singapore</h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
