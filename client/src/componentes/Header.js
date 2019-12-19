import React, { Component } from "react";
import beach from "./imagenes/beach.png";
import cutlery from "./imagenes/cutlery.png";
import music from "./imagenes/music.png";
import travel from "./imagenes/travel.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="titulo-app">MYtinerary</h1>
          <div className="imagenes-landing">
            <img className="logo-landing " src={music} alt="music-logo" />
            <img className="logo-landing " src={travel} alt="travel-logo" />
            <img className="logo-landing " src={cutlery} alt="cutlery-logo" />
            <img className="logo-landing " src={beach} alt="beach-logo" />
          </div>
          <p className="texto-app">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
