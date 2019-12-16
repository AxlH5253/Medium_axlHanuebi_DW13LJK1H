import React, { Component } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

class NewStory extends Component{
  render(){
    return(
      <div className="app-body">
        <Header/>
        <Content/>
      </div>
    ); 
  }
}

class Header extends Component{
  render(){
  return(
    <div style={{width:'99.7%', display:'flex',justifyContent:'center'}}>
    <div className="app-new-story-header">
      <Link to="/home" style={linkStyle}>
      <img className="app-medium-icon" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png">
      </img>
      </Link>
      <div className="app-header-div">
        <div><button className="publish-button">Publish</button></div>
        <div><MoreHorizIcon/></div>
        <div><NotificationsNoneOutlinedIcon/></div>
        <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
      </div>
    </div>
    </div>
  )
  }
}

function Content(){
    return(
      <div className="app-new-story-input">
        <div className="app-new-story-input-title">
           <AddCircleOutlineIcon style={{fontSize:'60px',visibility:'hidden'}} color='disabled'/>
          <input placeholder='Title'/>
        </div>
        <div className="app-new-story-input-content">
          <AddCircleOutlineIcon fontSize='large' color='disabled'/>
          <input placeholder='Tell your story'/>
        </div>       
      </div>
    )
}

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
}

export default NewStory;