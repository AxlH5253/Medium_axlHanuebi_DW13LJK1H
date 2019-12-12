import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import '../App.css';

import {
  Link
} from "react-router-dom";

class Register extends Component{
  render(){
    return (
    <div className="app-content-register">
       <h1>Join Medium.</h1>
       <h2>
         Create an account to receive great stories in your inbox, 
         personalize your homepage, and follow authors and topics that you love.
       </h2>

      <FormInput/>

        <div className="app-text-info">
          <span>Already have an account?</span>
          <Link to="/login" style={{textDecoration: "none"}}><ButtonClear title="Sign in"></ButtonClear></Link>
        </div>

      <div className="app-text-info" style={{marginTop : 30}}>
        To make Medium work, we log user data and share it with service providers. 
        Click “Sign up” above to accept Medium’s 
        <span style={{textDecoration:"underline"}}>Terms of Service</span> & 
        <span style={{textDecoration:"underline"}}>Privacy Policy.</span>
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
        <div className ="input-label">Your username</div>
        <input  type="text" />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input type="password" />
      </div>

      <div className="app-input-group">
        <div className ="input-label">Your email</div>
        <input type="email" />
      </div>

      <ButtonPrimary title="Registration">
      </ButtonPrimary>
      
    </div>
    );
  }
}

export default Register;
