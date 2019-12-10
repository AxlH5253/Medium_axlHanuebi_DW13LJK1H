import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const outline = {
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '15px',
    color: '#191a1c',
    textTransform: "none"
};
  
class ButtonOutline extends Component{
    render(){
        return(
        <Button variant="outlined" style={outline}>{this.props.title}</Button>
        );
    }
}

export default ButtonOutline;