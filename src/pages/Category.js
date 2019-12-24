import React, { Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const linkStyle = {
    textDecoration : 'none',
    color : 'rgba(0,0,0,0.54)'
}

class Category extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
           
    }
    
    componentDidMount() {
        axios.get(`https://medium-back-end.herokuapp.com/api/v1/categories`)
          .then(res => {
            const categories = res.data;
            this.setState({ categories });
          })
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
                    { this.state.categories.map(category => 
                        <Link to='/categorydetail' style={linkStyle} key={category.id}><div>{category.name}</div></Link>    
                    )}
                    
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