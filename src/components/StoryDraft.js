import React, { Component } from 'react';

 export default function DraftsContent(){
    return(
      <div style={{width:'82%',height:'300px', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div style={{margin:'10px', color: 'rgba(0,0,0,0.94)',fontSize:'20px'}}>You have no drafts</div>
        <div style={{margin:'10px', color: 'rgba(0,0,0,0.94)',fontSize:'20px'}}>Write on the go with IOS and Android apps!</div>
      </div>
    )
  }