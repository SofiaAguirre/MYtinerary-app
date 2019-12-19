import React, { Component } from "react";
import homeIcon from "./imagenes/homeIcon.png";
import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="contenedor homeContainer flex">
        <NavLink to="/">
          <img className="homeIcon" src={homeIcon} alt="home" />
        </NavLink>
      </div>
    );
  }
}

export default Home;
