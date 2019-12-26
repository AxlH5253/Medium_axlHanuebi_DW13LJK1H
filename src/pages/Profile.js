import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {Profile} from '../API/axios';

class ProfileUser extends Component{
  constructor(props){
    super(props);
    this.state = { 
        userData: []
    }
  }

  componentDidMount(){
      if(localStorage.getItem('token')){
          let token = localStorage.getItem('token')
          Axios.defaults.headers['Authorization'] = 'Bearer ' + token
          Axios.post(Profile)
          .then(res => {
              const userData = res.data[0];
              this.setState({ userData });
            })
      }
  }

  render(){
    return(
      <div style={{display:'flex',alignItems:'center', width:'82%',flexDirection:'column',marginTop:'50px'}}>
          <div style={{width:'70%', display:'flex'}}>
            <div style={{width:'70%'}}>
            <div style={{display:'flex',alignItems:'center'}}>
              <h1 style={{fontFamily:'sans-serif', fontWeight:'600',fontSize:'30px',paddingLeft:'10px'}}>
                {this.state.userData.fullname}
              </h1>
              <button style={{marginLeft:'20px',borderRadius:'5px',width:'100px',height:'25px', border:'1px solid rgba(0,0,0,0.94)', background:'#fff'}}>
                Edit Profil
              </button>
            </div>
            <div style={{paddingLeft:'10px',color:'#acacad'}}>
              1 Folowing
            </div>
            </div>
              <div style={{width:'30%',height:'250px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Avatar style={{height:'200px',width:'200px'}}></Avatar>
              </div>
          </div>
          <div style={{width:'70%',height:'60px',marginLeft:'10px',fontSize:'20px',color:'#acacad'}}>
              {this.state.userData.fullname} hasn't benn active on Medium yet. Check back later to see their stories,
              claps, and highlights.
          </div>
      </div>
  
    ); 
  }
}

export default ProfileUser;