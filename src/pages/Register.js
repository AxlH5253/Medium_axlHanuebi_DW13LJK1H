import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import '../App.css';

import {
  Link
} from "react-router-dom";

class Register extends Component{
  render(){
    return (
    <div style={{width:'100%', height:'100vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
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

      <div className="app-text-info" >
        To make Medium work, we log user data and share it with service providers. 
        Click “Sign up” above to accept Medium’s 
        <span style={{textDecoration:"underline"}}>Terms of Service</span> & 
        <span style={{textDecoration:"underline"}}>Privacy Policy.</span>
      </div>
    </div>
    </div>
  );
  }
}

class FormInput extends Component{

  constructor(props){
    super(props);
    this.state = {
        showEye1: 'inline',
        showEye2: 'none',
        hidepass: 'password'
      }
  }

  render(){
    return(
    <div className="app-form">
      <div className="app-input-group">
        <div className ="input-label">Your username</div>
        <input  type="text" />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input className="app-inputpass" type={this.state.hidepass}/>
        <VisibilityOffIcon 
          fontSize="small"
          onClick={()=> this.setState({showEye1:"none", showEye2: "inline",hidepass: 'text'} )}
          style={{display:this.state.showEye1}}
        />
        <VisibilityIcon 
          fontSize="small"
          onClick={()=> this.setState({showEye1:"inline", showEye2: "none",hidepass: 'password'} )}
          style={{display:this.state.showEye2}}
        />
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
