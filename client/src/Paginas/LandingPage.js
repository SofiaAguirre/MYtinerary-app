import React, { Component } from "react";
import Header from "../componentes/Header";
import Browse from "../componentes/Browse";
import Login from "../componentes/Login";
class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Header />
          <Browse />
        </main>
        <footer>
          <Login/>
        </footer>
      </React.Fragment>
    );
  }
}

export default LandingPage;
