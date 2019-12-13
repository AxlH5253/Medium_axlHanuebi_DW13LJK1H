import React, { Component} from 'react';
import {Link} from "react-router-dom";

const linkStyle = {
    textDecoration : 'none',
    color : 'rgba(0,0,0,0.54)'
}

class Category extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lbtnClr : "rgba(0,0,0,0.78)",
            rbtnClr : "rgba(0,0,0,0.54)",
            dsl : "inline-block",
            dsr : "none",
            category:{
              home : "HOME",
              onezero: "ONEZERO",
              elemental: "ELEMENTAL",
              gen: "GEN",
              zora: "ZORA",
              forge: "FORGE",
              humanparts: "HUMAN PARTS",
              marker: "MARKER",
              level: "LEVEL",
              heat: "HEAT",
            }
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

                <Link to="/home" style={linkStyle}><div style={{display : this.state.dsl}}>HOME</div></Link>
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

export default Category;