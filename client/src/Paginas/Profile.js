import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Home from "../componentes/Home";
class Profile extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  constructor() {
    super()
    this.state = {
      name: '',
      picture: '',
      email: ''
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(decoded);
    this.setState({
      username: decoded.name,
      profileImg: decoded.picture,
      email: decoded.email
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="contenedor profile">
          <h1 className="ProfileTitle">Profile</h1>
          <div className="contenedor-imagen-flex">
            <img src={this.state.profileImg} alt="profileImg" className="profileimg" />
          </div>
          <div className="ProfileText">
            <p className="usernameProfile">Username: &nbsp; <b>{this.state.username} </b> </p>
            <p>Email: &nbsp; <b>{this.state.email} </b> </p>
          </div>
          <div className="logoutProfile">
            <button type="button" className="btn btn-dark">
              <a href="" onClick={this.logOut.bind(this)}> Log out  </a>
            </button>
          </div>
        </div>
        <footer className="homeFooter flex">
          <div className="contenedor home">
            <Home />
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Profile