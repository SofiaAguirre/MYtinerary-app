import React, { Component } from "react";
import user from "./imagenes/user.png";
import menu from "./imagenes/menu.png";
import jwt_decode from 'jwt-decode'
import { Link, withRouter } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand
} from "reactstrap";

class navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  constructor() {
    super()
    this.state = {
      picture: ''
    }
  }
  
  componentDidMount() {
    if (localStorage.usertoken) {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        profileImg: decoded.picture
      })
    } 
  }
  render() {
    const loginRegLink = (
      <div>
        <nav className=' contenedor navbar'>
          <NavbarBrand><img className="userLogo" src={user} alt="user-logo"></img></NavbarBrand>
          <UncontrolledDropdown nav inNavbar className="ml-auto">
            <DropdownToggle nav caret>
              <img className="menuLogo" src={menu} alt="menu"></img>
            </DropdownToggle>
            <DropdownMenu className="dropdown-left-manual">
              <DropdownItem>
                <Link to="/LoginPage">
                  Log In
                </Link>
              </DropdownItem>

              <DropdownItem>
                <Link to="/SignInPage">
                  Sign up
                </Link>
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </nav>
      </div>
    )

    const userLink = (
      <div>
        <nav className='contenedor navbar'>
          <Link to="/Profile">
            <NavbarBrand><img className="profileLogo" src={this.state.profileImg} alt="user-logo"></img></NavbarBrand>
          </Link>
          <UncontrolledDropdown nav inNavbar className="ml-auto">
            <DropdownToggle nav caret>
              <img className="menuLogo" src={menu} alt="menu"></img>
            </DropdownToggle>
            <DropdownMenu className="dropdown-left-manual">
              <DropdownItem>
                <Link to="/Favourites">Favourites</Link>
              </DropdownItem>
              <DropdownItem>
                <a href="" onClick={this.logOut.bind(this)}> Logout  </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </nav>
      </div>
    )
    return (
      
      <header>
        {localStorage.usertoken ? userLink : loginRegLink}
      </header>
    );
  }
}

export default withRouter(navbar);
