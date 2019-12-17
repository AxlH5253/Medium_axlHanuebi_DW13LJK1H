import React, { Component } from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';

class Bookmarks extends Component{
  render(){
    return(
      <div style={{display:'flex',alignItems:'flex-start', width:'82%',flexDirection:'column',marginTop:'50px'}}>
          <div style={{ width:'100%'}}>
            <h1 style={{fontFamily:'sans-serif', fontWeight:'600',fontSize:'40px'}}>Bookmarks</h1>
          </div>
          <div style={{ width:'80%',height:'100px', border:'1px solid #adb3b2',display:'flex',alignItems:'center'}}>
            <div style={{borderRight:'1px solid #adb3b2', width:'15%',height:'80%', display:'flex',justifyContent:'center'}}>
                <BookmarkIcon style={{fontSize:'70px'}}/>
            </div>
            <div style={{width:'85%',paddingRight:'10px',paddingLeft:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div style={{display:'flex',width:'50%', alignItems:'center'}}>
                <h1>Ofline Reading is here</h1>
              </div>
              <div style={{display:'flex',width:'60%',justifyContent:'flex-end'}}>
                <button style={{height:'45px',width:'100px',borderRadius:'10px',background:'rgba(0,0,0,0.76)',color:'#fff',border:'none'}}>
                Upgrade
              </button>
             </div>
            </div>
          </div>
      </div>
  
    ); 
  }
}

export default Bookmarks;