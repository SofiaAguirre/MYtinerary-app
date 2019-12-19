import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import jwt_decode from 'jwt-decode'
import { register } from "../componentes/UserFunctions";
import { googlelogin } from "../componentes/UserFunctions";
class GoogleAuth extends Component {
    render() {
        const { history } = this.props;
        const responseGoogle = (response) => {
            console.log(response);
            let token = response.Zi.id_token;
            const decoded = jwt_decode(token);
            console.log(decoded);

            const newUser = {
                username: decoded.name,
                email: decoded.email,
                password: decoded.email,
                profileImg: decoded.picture
            }
            const user = {
                email: newUser.email,
                password: newUser.password
            }
            console.log(newUser);
            register(newUser).then(res => {   
                googlelogin(user);
                history.push(`/Cities`);    
            })
        }
        return (
            <div className="contenedor flex">
                <GoogleLogin
                    clientId="694648633780-362cc74o346aum8amjngqht4p3vsmoff.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default GoogleAuth;
