import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {
  Link
} from "react-router-dom";

const arrowBack = <div className="app-arrow-back-text"><span>&#60;</span>All sign in Options</div>

class Login extends Component{

  render(){
    return(
      <div style={{width:'100%', height:'100vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
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
        <div className ="input-label">Your email</div>
        <input  type="text" />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input className="app-inputpass" type={this.state.hidepass} />
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

      <Link to="/home" style={{textDecoration: "none"}}><ButtonPrimary title="Continue"></ButtonPrimary></Link>
        
 
    </div>
    );
  }
}

export default Login;
