import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
  
const clear = {
    textAlign: 'center',
    backgroundColor: 'white',
    color: "#03Ab7C",
    textTransform: "none",
    fontWeight: "bold"
};

class ButtonClear extends Component{
    render(){
        return(
        <Button style={clear}>{this.props.title}</Button>
        );
    }
}

export default ButtonClear;