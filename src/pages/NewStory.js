import React, { Component } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ImageIcon from '@material-ui/icons/Image';
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
      <Link to="/" style={linkStyle}>
      <img className="app-medium-icon" alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png">
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

class Content extends Component{
  constructor(props){
    super(props);
    this.state = { 
        showImage: 'none',
        showInput: 'none',
        imgUrl:''
    }
  }

  showInput = event =>{
    if(this.state.showInput === 'none'){
      this.setState({ showInput:'inline'})
    }else{
      this.setState({ showInput:'none'})
    }
  }

  submitUrl = event =>{
    if (event.keyCode === 13){
      if(this.state.showImage === 'none'){
        this.setState({ showImage:'inline',imgUrl:event.target.value})
      }else{
        this.setState({ showImage:'none',imgUrl:''})
      }
      event.target.value = '';
    }
  }

  render(){
    return(
      <div className="app-new-story-input">
        <div className="app-new-story-input-title">
          <input placeholder='Title'/>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <ImageIcon onClick={this.showInput} fontSize='large' color='disabled'/>
          <input style={{display:this.state.showInput,width:'600px',height:'30px'}}
           onKeyUp={this.submitUrl}
          />
        </div>
        <div style={{ border:'1px solid grey' ,width:'700px',height:'300px',display:this.state.showImage}}>
        <img style={{width:'100%',height:'100%'}}
          src={this.state.imgUrl}>
        </img>
        </div>
        <div className="app-new-story-input-content">
          <textarea style={{fontSize:'25px',width:'700px',height:'500px'}} placeholder='Tell your story'/>
        </div>       
      </div>
    )
  }
}

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
}

export default NewStory;