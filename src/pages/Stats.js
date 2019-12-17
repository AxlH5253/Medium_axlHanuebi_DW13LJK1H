import React, { Component } from 'react';

class Stats extends Component{
  constructor(props){
    super(props)
    this.state = { 
        data:[
          {
            id:1,
            title:'Views',
            color: '#adb3b2'
          },
          {
            id:2,
            title:'Reads',
            color: '#adb3b2'
          },
          {
            id:3,
            title:'Fans',
            color: '#adb3b2'
          }
    ]
  }
}

  render(){
    return(
      <>
      <div style={{display:'flex',alignItems:'flex-start', width:'82%',flexDirection:'column'}}>
          <div style={{ width:'100%'}}>
            <h1>Stats</h1>
          </div>
          <div style={{width:'100%',height:'50px',display:'flex',justifyContent:'center', alignItems:'center',borderBottom:'1px solid #adb3b2'}}>
            <div style={{padding:'10px',width:'50%', display:'flex',justifyContent:'flex-start',color:'#adb3b2'}}>
              Click to story bellow to view detailes stats
            </div>
            <div style={{padding:'10px',width:'50%', display:'flex',justifyContent:'flex-end',color:'#adb3b2'}}>
              Learn more about using stats
            </div>
          </div>
      </div>
      
      <div style={{display:'flex',justifyContent:'center', width:'82%', height:'200px'}}>
        {this.state.data.map((item)=>{
        return(
        <div key={item.id} 
            //  onClick={()=>this.setState(this.state.data.push())}
             style={{border:'1px solid #adb3b2', width:'33.3%', height:'200px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}
        >
          <div style={{fontSize:'100px',display:'flex',flexDirection:'flex-start',width:'50%',color:item.color}}>
          <div style={{color:item.color}}>0</div>
          </div>
          <div style={{fontSize:'25px',color:item.color}}>{item.title} (30 days)</div>
        </div>)
        })
      }
      </div>

      
      </>
    ); 
  }
  
}

export default Stats;