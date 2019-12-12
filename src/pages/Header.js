import React, { Component,List, Container,Input,useState } from 'react';
import '../App.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';

import {Link} from "react-router-dom";
  

const header = {
    display: "flex",
    width: "85%",
    fontStyle: "normal",
    backgroundColor: "#fff",
    color: "rgba(0,0,0,0.54)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    boxShadow: "none",
    zIndex: "500"
};

const linkStyle = {
    textDecoration : 'none',
    color : 'rgba(0,0,0,0.54)'
}

class HeaderClass extends Component{

    render(){
       
        return(
            <>
            <div position="static" style={header}>
                <Link to="/home" style={linkStyle}><h1 style={{fontWeight:"bold",marginLeft:"20px"}}>Medium</h1></Link>
                <div className="app-header-div">
                    <div><SearchSharpIcon></SearchSharpIcon></div>
                    <div><NotificationsNoneOutlinedIcon ></NotificationsNoneOutlinedIcon ></div>
                    <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                </div>
            </div>
            </>
        );
    }
}

export default HeaderClass