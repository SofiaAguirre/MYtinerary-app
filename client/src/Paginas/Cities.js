import React, { Component } from "react";
import Home from "../componentes/Home";
import Cities from "../componentes/Cities";

class cities extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Cities />
        </main>
        <footer className="homeFooter flex">
          <div className="contenedor home">
            <Home />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default cities;
