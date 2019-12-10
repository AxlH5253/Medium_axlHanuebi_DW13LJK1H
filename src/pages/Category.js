import React, { Component,List, Container,Input,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import '../App.css';


const arrowBack = <div className="App-arrow-back-text"><span>&#60;</span></div>

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const header = {
    display: "flex",
    width: "100%",
    fontStyle: "normal",
    backgroundColor: "#fff",
    color: "rgba(0,0,0,.54)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    boxShadow: "none"
};

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      fontSize: "10px",
      fontFamily:"sans-serif",
      letterSpacing: 0,
      fontWeight: "400",
      fontStyle: "normal",
      backgroundColor: "#fff",
      color: "rgba(0,0,0,.54)"
    },
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  export default class Category extends Component{

    render(){
        return(
            <div className="App-category">
                <div className="App-arrow-back-text"><span>&#60;</span></div>
                <div>HOME</div>
                <div>ONEZERO</div>
                <div>ELEMENTAL</div>
                <div>GEN</div>
                <div>ZORA</div>
                <div>FORGE</div>
                <div>HUMAN PARTS</div>
                <div>MARKER</div>
                <div>LEVEL</div>
                <div>HEAT</div>
                <div className="App-arrow-back-text"><span>&#62;</span></div>
            </div>
        );
    }
}

function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <AppBar position="static" style={header}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Onezero" {...a11yProps(1)} />
            <Tab label="Elamental" {...a11yProps(2)} />
            <Tab label="Gen" {...a11yProps(3)} />
            <Tab label="Zora" {...a11yProps(4)} />
            <Tab label="Forge" {...a11yProps(5)} />
            <Tab label="Human parts" {...a11yProps(6)} />
            <Tab label="Marker" {...a11yProps(7)} />
            <Tab label="Human parts" {...a11yProps(8)} />
          </Tabs>
        </AppBar>
    );
  }