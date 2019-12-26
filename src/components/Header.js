import React, { Component} from 'react';
import '../App.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {Profile} from '../API/axios';
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
        this.state = { 
            showMenu: 'none',
            showAvatar:'none',
            showBtnLogin:'flex'
        }
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            let token = localStorage.getItem('token')
            this.setState({showAvatar:'block',showBtnLogin:'none'})
        }else{
            this.setState({showAvatar:'none',showBtnLogin:'flex'})
        }
        
    }

    onclick = event => {
        if(this.state.showMenu === 'none'){
            this.setState({ showMenu : 'block'});
        }else{
            this.setState({ showMenu : 'none'});
        }
        
    };

    render(){
       
        return(
            <div style={{boxShadow:'0 4px 2px -2px #f2f0eb',width:'100%',height:'100px', display:'flex',justifyContent:'center'}}>
            <div position="static" style={header}>
                <Link to="/" style={linkStyle}><h1 style={{fontWeight:"bold",marginLeft:"20px"}}>Medium</h1></Link>
                <div> 
                    <div className="app-header-div">
                        {/* {/* <div><SearchSharpIcon></SearchSharpIcon></div> */}
                        <div style={{display:this.state.showAvatar}}>
                            <NotificationsNoneOutlinedIcon />
                        </div>
                        <Avatar 
                            style={{display:this.state.showAvatar}}
                            className="app-dropdown-profil" 
                            alt="Remy Sharp" 
                            src="https://www.bing.com/th?id=OIP.XY9nwIbgknKWPCFtoBilCgHaFy&pid=Api&rs=1"
                            onClick={this.onclick}
                        />
                        <Link to="/login" style={linkStyle}>
                            <div style={{display:this.state.showBtnLogin}} className="app-home-login-btn"> 
                                Login
                            </div>
                        </Link>
                        <div style={{paddingRight:'40px'}}></div>
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

class MenuProfil extends Component{

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

    signOut(){
        localStorage.clear();
        window.location = '/'
    }
    render(){
        return(
        <>
        <div className="app-dropdown-profil-content">
            <div style={{display:'flex'}}>
                <Avatar alt="Remy Sharp" 
                src="https://www.bing.com/th?id=OIP.XY9nwIbgknKWPCFtoBilCgHaFy&pid=Api&rs=1"/>
                <div style={{marginLeft:'10px',display:'flex',flexDirection:'column'}}>
                    {this.state.userData.fullname}
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
                <Link to="/" style={linkStyle}><li>Setings</li></Link>
                <Link to="/" style={linkStyle}><li>Help</li></Link>
                <div onClick={()=>this.signOut()}><li>Sign Out</li></div>
            </ul>
        </div>
        </>
        )
    }
}

export default HeaderClass;