import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const primary = {
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '15px',
    backgroundColor: '#191a1c',
    color: "white",
    textTransform: "none"
};
  
class ButtonPrimary extends Component{
    render(){
        return(
        <Button style={primary}>{this.props.title}</Button>
        );
    }
}

export default ButtonPrimary;