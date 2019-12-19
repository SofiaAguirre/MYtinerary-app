import React, { Component } from "react";
import browse from "./imagenes/next.png";
import { NavLink } from "react-router-dom";
class Browse extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="contenedor-imagen-flex">
            <NavLink to="/Cities">
              <img
                className="imagen-browse"
                src={browse}
                alt="start-browsing"
              />
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
