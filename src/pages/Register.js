import React, { Component } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonClear from '../components/ButtonClear';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import '../App.css';
import {Link} from "react-router-dom";
import Axios from 'axios';
import {RegisterUser} from '../API/axios'

class Register extends Component{
  
  componentDidMount(){
    if(localStorage.getItem('token')){
      window.location = '/';
    }
  }

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
        email: '',
        username:'',
        password:'',
        showEye1:'inline',
        showEye2:'none',
        hidepass:'password',
        borderpass: '1px solid black',
        borderemail: '1px solid black',
        borderusername: '1px solid black',
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
    }else if(value === 'email'){
      if(event.target.value === "" ){
        this.setState({ borderemail: '1px solid red' });
      }else{
        this.setState({ borderemail: '1px solid black',email:event.target.value });
      }
    }else{
      if(event.target.value === "" ){
        this.setState({ borderusername: '1px solid red' });
      }else{
        this.setState({ borderusername: '1px solid black',username:event.target.value });
      }
    }
  }

  onSubmit = event =>{
    event.preventDefault();
    if ((document.getElementById('pass').value === "")|| 
       ((document.getElementById('username').value === "")||
       (document.getElementById('email').value === ""))){
         alert("Username,email and password must be filled")
    }else{
      const user = {
        username: this.state.username,
        fullname: this.state.username,
        email: this.state.email,    
        password: this.state.password
      }

      Axios.post(RegisterUser,user)
      .then(res=>{
        if(res.data[0]['token']){
          localStorage.setItem('token', res.data[0]['token']);
          window.location = '/';
        }else if(res.data[0]['message']){
          alert(res.data[0]['message'])
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
        <div   className ="input-label">Your username</div>
        <input id='username'  type="text"  
         onChange={(event)=>this.onChange(event,'username')}  
         style={{borderBottom:this.state.borderusername}}  />
      </div>

      <div className="app-input-group"> 
        <div className ="input-label">Your password</div>
        <input  id='pass'
         className="app-inputpass" type={this.state.hidepass} 
         onChange={(event)=>this.onChange(event,'pass')}  
         style={{borderBottom:this.state.borderpass}}/>
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
        <input  id='email' type="email"  
         onChange={(event)=>this.onChange(event,'email')}  
         style={{borderBottom:this.state.borderemail}} />
      </div>

      <div onClick={this.onSubmit}>
        <ButtonPrimary title="Registration"/>
      </div>
      
    </div>
    );
  }
}

export default Register;
