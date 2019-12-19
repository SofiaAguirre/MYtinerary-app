import React, { Component } from "react";
import Home from "../componentes/Home";
import { login } from "../componentes/UserFunctions";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import GoogleAuth from "../componentes/googleAuth";
class LogIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    
    login(user).then(res => {
      if (typeof res === 'string') {
        this.props.history.push(`/Cities`)
        window.location.reload();
      } else {
        var newDiv = document.createElement("P");
        newDiv.innerText = "Your password is incorrect";
        document.getElementById("err").appendChild(newDiv);
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="titleForm">
          <h1 className="ItinerariesTitle">Log In:</h1>
        </div>
        <div className="form">
          <Form noValidate onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" placeholder="Email"
                value={this.state.email} onChange={this.onChange} />
            </FormGroup>
            <FormGroup id="err">
              <Label for="password">Password</Label>
              <Input type="password" name="password" placeholder="Password"
                value={this.state.password} onChange={this.onChange} />
            </FormGroup>
            <div className="flex">
              <Button className="btn btn-dark" type="submit" >Log in</Button>
            </div>
            <GoogleAuth history={this.props.history} />
          </Form>
        </div>
        <footer className="homeFooter flex">
          <div className="contenedor home">
            <Home />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default LogIn;
