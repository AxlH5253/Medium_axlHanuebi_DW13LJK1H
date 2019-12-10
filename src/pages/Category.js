import React, { Component,List, Container,Input,useState } from 'react';
import '../App.css';

export default class Category extends Component{
    
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
                <div style={{display : this.state.dsl}}>HOME</div>
                <div>ONEZERO</div>
                <div>ELEMENTAL</div>
                <div>GEN</div>
                <div>ZORA</div>
                <div>FORGE</div>
                <div>HUMAN PARTS</div>
                <div>MARKER</div>
                <div>LEVEL</div>
                <div style={{display : this.state.dsr}}>HEAT</div>
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