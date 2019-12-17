import React, { Component} from 'react';
import '../App.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';

import {Link} from "react-router-dom";
  

const header = {
    display: "flex",
    fontStyle: "normal",
    backgroundColor: "#fff",
    color: "rgba(0,0,0,0.54)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    zIndex: "500",
    width:'85%',
    height:'90px'
};

const linkStyle = {
    textDecoration : 'none',
    color : 'rgba(0,0,0,0.54)',
}

class HeaderClass extends Component{
    constructor(props){
        super(props);
        this.state = { showMenu: 'none'}
    }

    onclick = event => {
        if(this.state.showMenu == 'none'){
            this.setState({ showMenu : 'block'});
        }else{
            this.setState({ showMenu : 'none'});
        }
        
    };

    render(){
       
        return(
            <div style={{boxShadow:'0 4px 2px -2px #f2f0eb',width:'100%',height:'100px', display:'flex',justifyContent:'center'}}>
            <div position="static" style={header}>
                <Link to="/home" style={linkStyle}><h1 style={{fontWeight:"bold",marginLeft:"20px"}}>Medium</h1></Link>
                <div> 
                    <div className="app-header-div">
                        <div><SearchSharpIcon></SearchSharpIcon></div>
                        <div><NotificationsNoneOutlinedIcon ></NotificationsNoneOutlinedIcon ></div>
                        <Avatar 
                            className="app-dropdown-profil" alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                            onClick={this.onclick}
                        />
                    </div>
                    <div style={{display: this.state.showMenu}}>
                        <MenuProfil/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function MenuProfil(){
    return(
    <>
      <div className="app-dropdown-profil-content">
        <div style={{display:'flex'}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <div style={{marginLeft:'10px',display:'flex',flexDirection:'column'}}>
                Ronaldo Wati
                @ronaldowati
            </div>
        </div>
        <ul>
            <Link to="/newstory" style={linkStyle}><li> New Story</li></Link>
            <Link to="/storydraft" style={linkStyle}><li>Stories</li></Link>
            <Link to="/stats" style={linkStyle}><li>Stats</li></Link>
        </ul>
        <ul>
            <Link to="/bookmarks" style={linkStyle}><li>Bookmarks</li></Link>
            <Link to="/profile" style={linkStyle}><li>Profile</li></Link>
            <Link to="/home" style={linkStyle}><li>Setings</li></Link>
            <Link to="/home" style={linkStyle}><li>Help</li></Link>
            <Link to="/login" style={linkStyle}><li>Sign Out</li></Link>
        </ul>
      </div>
    </>
    )
}

export default HeaderClass