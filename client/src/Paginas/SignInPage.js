import React, { Component } from "react";
import Home from "../componentes/Home";
import { register } from "../componentes/UserFunctions";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      profileImg: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      profileImg: this.state.profileImg
    }
    const errors = {}
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    errors.email = !newUser.email.match(emailformat) ?
      "Invalid Email" : ""
    errors.password = newUser.password.length < 6 ?
      "Password should be more than 6 characters" : ""
    errors.username = newUser.username.length < 4 ?
      "Username should be more than 4 characters" : ""
    console.log(errors)
    if (errors.email === "" && errors.password === "" && errors.username === "") {
      register(newUser).then(res => {
        if (typeof res !== 'string') {
          this.props.history.push(`/LoginPage`)
          }else{
            var newDiv = document.createElement("P");
            newDiv.innerText = "User already exist, try to LogIn.";
            document.getElementById("err").appendChild(newDiv);
        }
      })
    } else {
      var newMessage = document.createElement("P");
      newMessage.innerText = "Oops seems that your credentials doesn't meet the requirements, check out them, Password & username must be 6 characters at least.";
      document.getElementById("err2").appendChild(newMessage);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="titleForm">
          <h1 className="ItinerariesTitle">Create account:</h1>
        </div>
        <div className="form">
          <Form noValidate onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="Username must have at least 6 characters"
                value={this.state.username} onChange={this.onChange} />
            </FormGroup>
            <FormGroup id="err">
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="ex: myemail@hotmail.com"
                value={this.state.email} onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password must have at least 6 characters"
                value={this.state.password} onChange={this.onChange} />
            </FormGroup>
            <FormGroup id = "err2">
              <Label for="profileImg">Profile Picture</Label>
              <Input type="text" name="profileImg" id="profileImg" placeholder="URL"
                value={this.state.profileImg} onChange={this.onChange} />
            </FormGroup>
            <div className="flex">
              <Button className="btn btn-dark" type="submit" >Submit</Button>
            </div>
          </Form>
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

export default SignIn;
