import React, { Component } from 'react';
import ButtonOutline from '../components/ButtonOutline';
import ButtonOutlineActived from '../components/ButtonOutlineActived';
import { Link } from "react-router-dom";


class Story extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
        drafColor: 'rgba(0,0,0,0.94)',
        publishColor : '#adb3b2',
        draftBorder:'1px solid rgba(0,0,0,0.94)',
        publishBorder:'none'
    }
  }

  onClikcDraft = event => {
    this.setState({
      drafColor: 'rgba(0,0,0,0.94)',
      publishColor : '#adb3b2',
      draftBorder:'1px solid rgba(0,0,0,0.94)',
      publishBorder:'none'
    });
  };

  onClikcPublish = event => {
    this.setState({
      drafColor: '#adb3b2',
      publishColor : 'rgba(0,0,0,0.94)',
      draftBorder:'none',
      publishBorder:'1px solid rgba(0,0,0,0.94)'
    });
  };
  
  render(){
      return(
        <>
        <div className='app-story-body-top'>
          <div style={{width:'50%'}}>
            <h1 className='app-story-body-top-title'>Your Stories</h1>
          </div>
          <div className='app-story-body-top-button-box'>
            <div style={{marginLeft:'10px'}}><ButtonOutline title="Import a story"/></div>
            <div style={{marginLeft:'10px'}}><ButtonOutlineActived title="Write a story"/></div>
          </div>
        </div>
        <div className='app-story-body-bottom'>
          <Link to="/storydraft" style={linkStyle}>
            <div 
              style={{marginRight:'10px', color: this.state.drafColor,borderBottom:this.state.draftBorder}}
              onClick={this.onClikcDraft}
              >
                Drafts
            </div>
          </Link>
          <Link to="/storypublish" style={linkStyle}>
            <div 
              style={{marginRight:'10px', color: this.state.publishColor, borderBottom: this.state.publishBorder}}
              onClick={this.onClikcPublish}
            >
              Published
            </div>
          </Link>
        </div>
      </>
      )
  }
}

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
}

export default Story;