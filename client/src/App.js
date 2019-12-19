import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Paginas/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CitiesPage from "./Paginas/Cities";
import loginPage from "./Paginas/LoginPage";
import SigninPage from "./Paginas/SignInPage";
import Navbar from "./componentes/Navbar";
import Itineraries from "./Paginas/Itineraries";
import Profile from "./Paginas/Profile";
import Favourites from "./Paginas/Favourites"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
         <Navbar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Cities" component={CitiesPage} />
            <Route path="/LoginPage" component={loginPage} />
            <Route path="/SignInPage" component={SigninPage} />
            <Route path= "/Profile" component = {Profile}/>
            <Route path="/itineraries/:city" component = {Itineraries}/> 
            <Route path="/Favourites" component = {Favourites}/>
            <Route
              render={() => <div className = "contenedor"><h3>Oops seems that there's nothing in here!</h3></div>}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
