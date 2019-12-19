import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {login} from "../componentes/UserFunctions";
class Login extends Component {
  render() {
    const loginRegLink = (
      <div>
      <p className="texto-Landing">Want to build your own MYtinerary?</p>
      <div className="Login">
        <NavLink to="/LoginPage">
          <button type="button" className="btn btn-dark">
            Log In
          </button>
        </NavLink>
        <NavLink to="/SignInPage">
          <button type="button" className="btn btn-dark">
            Create Account
          </button>
        </NavLink>
      </div>
    </div>
    )
    const userLink = (
      <div>
        <p className="texto-Landing">Want to build your own MYtinerary?</p>
      </div>
    )
    return (
      <React.Fragment>
         {localStorage.usertoken ? userLink : loginRegLink}
      </React.Fragment>
    );
  }
}

export default Login;
