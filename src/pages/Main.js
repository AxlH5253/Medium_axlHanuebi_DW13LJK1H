import React, { Component} from 'react';
import Header from './Header';
import Home from './Home';
import OneZero from './Onezero';
import Elemental from './Elemental';
import Gen from './Gen';
import Zora from './Zora';
import Forge from './Forge';
import HumanParts from './HumanParts';
import Marker from './Marker';
import Level from './Level';
import Heat from './Heat';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const linkStyle = {
    textDecoration : 'none',
    color : 'rgba(0,0,0,0.54)'
}

class Category extends Component{
    render(){
    return(
        <Router>
          <div>
          <Switch>
            <Route path="/onezero">
              <div className="app-body">
                <Header/>
                <Content/>
                <OneZero/>
              </div>
            </Route>
            <Route path="/elemental">
              <div className="app-body">
                <Header/>
                <Content/>
                <Elemental/>
              </div>
            </Route>
            <Route path="/gen">
              <div className="app-body">
                <Header/>
                <Content/>
                <Gen/>
              </div>
            </Route>
            <Route path="/zora">
              <div className="app-body">
                <Header/>
                <Content/>
                <Zora/>
              </div>
            </Route>
            <Route path="/forge">
              <div className="app-body">
                <Header/>
                <Content/>
                <Forge/>
              </div>
            </Route>
            <Route path="/humanparts">
              <div className="app-body">
                <Header/>
                <Content/>
                <HumanParts/>
              </div>
            </Route>
            <Route path="/marker">
              <div className="app-body">
                <Header/>
                <Content/>
                <Marker/>
              </div>
            </Route>
            <Route path="/level">
              <div className="app-body">
                <Header/>
                <Content/>
                <Level/>
              </div>
            </Route>
            <Route path="/heat">
              <div className="app-body">
                <Header/>
                <Content/>
                <Heat/>
              </div>
            </Route>
            <Route path="/">
              <div className="app-body">
                <Header/>
                <Content/>
                <Home/>
              </div>
            </Route>
          </Switch>
          </div>
        </Router>
      );
    }
}

export default class Content extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            lbtnClr : "rgba(0,0,0,0.78)",
            rbtnClr : "rgba(0,0,0,0.54)",
            dsl : "inline-block",
            dsr : "none"
        }
      }

    render(){
        return(
            <> 
            <div className="app-category">      
                <button 
                    className="app-arrow-back-text"
                    style={{color:this.state.rbtnClr}}
                    onClick={()=> this.setState({ dsl : "inline-block", dsr: "none", lbtnClr : "rgba(0,0,0,0.78)", 
                    rbtnClr : "rgba(0,0,0,0.54)" } )}><span>&#60;</span>
                </button>
                <Link to="/" style={linkStyle}><div style={{display : this.state.dsl}}>HOME</div></Link>
                <Link to="/onezero" style={linkStyle}><div>ONEZERO</div></Link>
                <Link to="/elemental" style={linkStyle}><div>ELEMENTAL</div></Link>
                <Link to="/gen" style={linkStyle}><div>GEN</div></Link>
                <Link to="/zora" style={linkStyle}><div>ZORA</div></Link>
                <Link to="/forge" style={linkStyle}><div>FORGE</div></Link>
                <Link to="/humanparts" style={linkStyle}><div>HUMAN PARTS</div></Link>
                <Link to="/marker" style={linkStyle}><div>MARKER</div></Link>
                <Link to="/level" style={linkStyle}><div>LEVEL</div></Link>
                <Link to="/heat" style={linkStyle}><div style={{display : this.state.dsr}}>HEAT</div></Link>                
                <button 
                    className="app-arrow-back-text"
                    style={{color:this.state.lbtnClr}}
                    onClick={()=> this.setState({ dsl : "none", dsr: "inline-block", lbtnClr : "rgba(0,0,0,0.54)",
                    rbtnClr : "rgba(0,0,0,0.78)"} )}><span>&#62;</span>
                </button>
            </div>
            </>
        );
    }
}