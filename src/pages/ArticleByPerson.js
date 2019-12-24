import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class ArticleByPerson extends Component{
  render(){
    return(
      <>
      <div style={{display:'flex',alignItems:'center', width:'82%',flexDirection:'column',marginTop:'50px',marginBottom:'10px'}}>
        <div style={{width:'70%', display:'flex'}}>
          <div style={{width:'70%'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <h1 style={{fontFamily:'sans-serif', fontWeight:'600',fontSize:'30px',paddingLeft:'10px'}}>
              Ryan Holiday
            </h1>
            <button style={{color:'#4dff85',marginLeft:'20px',borderRadius:'5px',width:'100px',height:'25px', border:'1px solid #4dff85', background:'#fff'}}>
              Follow
            </button>
          </div>
          <div style={{paddingLeft:'10px',color:'rgba(0,0,0,0.94)'}}>
            Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ 
            http://amzn.to/24qKRWR
          </div>
          </div>
            <div style={{width:'30%',height:'250px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Avatar src='https://tctechcrunch2011.files.wordpress.com/2017/04/ryan-holliday.jpg' style={{height:'200px',width:'200px'}}></Avatar>
            </div>
        </div>
        <div style={{ width:'70%',borderBottom:'1px solid #d3ded6',display:'flex',color:'#a2a6a3'}}>
            <div style={{paddingRight:'20px'}}>Profile</div>
            <div style={{paddingRight:'20px'}}>Claps</div>
            <div style={{paddingRight:'20px'}}>Hightlihts</div>
            <div style={{paddingRight:'20px'}}>Responses</div>
        </div>
    </div>
    <div style={{width:'58%'}}>
        <h3 style={{textAlign:'left'}}>Fetured</h3>
    </div>
    <Article/>
    <Article/>
    </>
    ); 
  }
}

function Article() {
    return(
        <div style={{display:'flex',alignItems:'center', width:'82%',flexDirection:'column',marginBottom:'30px'}}>
        <div style={{width:'70%',border:'1px solid #d3ded6', display:'flex',height:'400px'}}>
          <div style={{width:'100%'}}>
          <div style={{display:'flex',alignItems:'center'}}>
             <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'60px',height:'60px'}}>
              <Avatar src='https://tctechcrunch2011.files.wordpress.com/2017/04/ryan-holliday.jpg' style={{height:'50px',width:'50px'}}></Avatar>
            </div>
            <div style={{fontFamily:'sans-serif',fontSize:'16px',paddingLeft:'10px'}}>
              Ryan Holiday in Humman Parts
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center', width:'100%',height:'65%'}}>
            <img alt="Remy Sharp" src='https://i.ytimg.com/vi/Hmo0sm4lCSk/maxresdefault.jpg' style={{width:'95%',height:'100%'}}></img>
          </div>
            <h1 style={{paddingLeft:'20px',color:'rgba(0,0,0,0.94)'}}>
                How To Recover When The World Breaks You
            </h1>
          </div>
        </div>
        </div>
    )
}

export default ArticleByPerson;