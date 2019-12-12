import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import Register from './Register';
import Category from './Category';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const buttonSignUpStyle = {
  fontSize: '15px',
  textAlign: 'center',
  marginBottom: '15px',
  backgroundColor: '#191a1c',
  color: "white",
  textTransform: "none"
};


const arrowBack = <div className="app-arrow-back-text"><span>&#60;</span>All sign in Options</div>

class Login extends Component{
  render(){
    return(
      <Router>
         <div>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/home">
            <Category/>
          </Route>
          <Route path="/">
            <Content/>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

class Content extends Component{

  render(){
    return(
      <div className="app-body">
        <div className="app-content-login">
          <h1>Sign In with email</h1>
          <h2>
            Enter the email address associated with your account,
            and we'll send a magic link to your  inbox.
          </h2>
          <FormInput/>
          <Link to="/register" style={{textDecoration: "none"}}><ButtonClear title= {arrowBack}></ButtonClear></Link>
        </div>
      </div>
    ); 
  }
}

class FormInput extends Component{
  render(){
    return(
    <div className="app-form">
      <div className="app-input-group">
        <div className ="input-label">Your email</div>
        <input  type="text" />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input type="password" />
      </div>

      <Link to="/home" style={{textDecoration: "none"}}><ButtonPrimary title="Continue"></ButtonPrimary></Link>
        
 
    </div>
    );
  }
}

export default Login;
