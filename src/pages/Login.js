import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from "react-router-dom";
import Axios from 'axios';
import {login} from '../API/axios'

const arrowBack = <div className="app-arrow-back-text">Sign up</div>

class Login extends Component{

  componentDidMount(){
    if(localStorage.getItem('token')){
      window.location = '/';
    }
  }

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
          <Link to="/register" style={{textDecoration: "none"}}>
            <ButtonClear title= {arrowBack}></ButtonClear>
          </Link>
        </div>
      </div>
    ); 
  }
}

class FormInput extends Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password:'',
        showEye1: 'inline',
        showEye2: 'none',
        hidepass: 'password',
        borderpass: '1px solid black',
        borderemail: '1px solid black',
        data: []
      }
  }

  onChange = (event,value) => {
    if(value === 'pass'){
      if(event.target.value === "" ){
        this.setState({ borderpass: '1px solid red' });
      }else{
        this.setState({ borderpass: '1px solid black',password:event.target.value });
      }
    }else{
      if(event.target.value === "" ){
        this.setState({ borderemail: '1px solid red' });
      }else{
        this.setState({ borderemail: '1px solid black',email:event.target.value });
      }
    }
  }

  onSubmit = event =>{
    event.preventDefault();
    if ((document.getElementById('pass').value === "")|| 
       (document.getElementById('email').value === "")){
         alert("Email and password must be filled")
    }else{
      const user = {
        email: this.state.email,
        password: this.state.password
      }

      Axios.post(login,user)
      .then(res=>{
        if(res.data[0]['token']){
          console.log(res.data[0]['token'])
          localStorage.setItem('token', res.data[0]['token']);
          window.location = '/';
        }else if(res.data[0]['message']){
          alert("Wrong email or passwort")
        }else{
          alert("Cannot connect to server")
        }
      })
    } 
  }

  render(){
    return(
    <div className="app-form">
      <div className="app-input-group">
        <div className ="input-label">Your email</div>
        <input  
         id='email'
         type="text" 
         onChange={(event)=>this.onChange(event,'email')}  
         style={{borderBottom:this.state.borderemail}} />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input className="app-inputpass" 
         id='pass'
         style={{borderBottom:this.state.borderpass}} 
         onChange={(event)=>this.onChange(event,'pass')}
         type={this.state.hidepass} />
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

      <div onClick={this.onSubmit}><ButtonPrimary title="Continue"></ButtonPrimary></div>
   
    </div>
    );
  }
}

export default Login;
