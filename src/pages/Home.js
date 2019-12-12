import React, { Component } from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ArticleDetail from './ArticleDetail';

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

 export default function Home() {
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ borderBottom: "1px solid #dae3dc", padding: "20px"}}>
        
        <Link to="/articledetail" style={linkStyle}>
          <Grid item xs>
            <Paper className={classes.paper}><MediaCard/></Paper>
          </Grid>
        </Link>

        <Grid item xs>
          <Paper className={classes.paper}><MediaCardTo/></Paper>
        </Grid>
        <Grid item xs>
        <React.Fragment>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardLeft/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardLeftNd/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardLeftRd/></Paper>
          </Grid>
        </React.Fragment>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ borderBottom: "1px solid #dae3dc", padding: "20px"}}>
        <Grid item xs={8}>
        <React.Fragment>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardRight/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardRightNd/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><SideCardRightRd/></Paper>
          </Grid>
        </React.Fragment>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h4" style={{ borderBottom: "1px solid #dae3dc", padding: "20px"}}>
            Popular on Medium
          </Typography>
          <React.Fragment>
            <Grid item xs>
              <Paper className={classes.paper}><SideCardNoImage/></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}><SideCardNoImageNd/></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}><SideCardNoImageRd/></Paper>
            </Grid>
          </React.Fragment>
          </Grid>
      </Grid>
  </div>
  );
}
  
  function MediaCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.image} 
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://wallpapercave.com/wp/wp2670849.jpg"
          title="Contemplative Reptile"
        />
         <div className={classes.details}>
        <CardContent className={classes.content}>
          <h1 gutterBottom variant="h5" component="h2">
            Russia Collected Its Dues From Trump This Year
          </h1>
          <Typography variant="body2" color="textSecondary" component="p">
            Foreign Minister Sergei Lavrov’s visit to Washington may as well be a 
            victory lap: U.S. foreign policy is serving Moscow’s interests now.
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
    );
  }

  function MediaCardTo() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.image} 
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.hdwallpapers.in/download/world_of_warplanes-1366x768.jpg"
          title="Contemplative Reptile"
        />
         <div className={classes.details}>
        <CardContent className={classes.content}>
          <h1 gutterBottom variant="h5" component="h2">
            Let’s Strip Away the President’s Only Asset — His Name Brand
          </h1>
          <Typography variant="body2" color="textSecondary" component="p">
          It’s time to declare the T-word a profanity
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
    );
  }

function SideCardLeft() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <CardMedia
          className={classes.cover}
          image="http://www.streetviewphotography.net/wp-content/uploads/2013/07/3-RAMZY.jpg"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Spotify’s Year-End Lists Are the Ultimate Personality Test
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
             
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }

  function SideCardLeftNd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <CardMedia
          className={classes.cover}
          image="https://www.bing.com/th?id=OIP.xDDYX7rbOGAHgmwhR-LtjwHaE8&pid=Api&rs=1"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Twitter Users Are Brilliantly Taking Revenge on Bots That Steal Artwork
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }

  function SideCardLeftRd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <CardMedia
          className={classes.cover}
          image="https://www.bing.com/th?id=OIP.g44inaqF-xo24qpkRmuFRwHaE8&pid=Api&rs=1"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Who Watches ‘Watchmen’?
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              A landmark comic becomes a show that 
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }

  function SideCardRight() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <>
      <Card className={classes.cardSideRight}>
        <div className={classes.detailSideRight}>
          <CardContent className={classes.content}>
            <Typography style={{marginBottom:"20px"}} color="textSecondary">BASED ON YOUR READ HISTORY</Typography>
            <Typography component="h5" variant="h5">
              An FBI Behaviour Expert Explains How to Quickly Build Trust With Anyone
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              It’s not always about you!
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://www.bing.com/th?id=OIP.hRRLQZMV-E0pkGzZvBxEUgHaEo&pid=Api&rs=1"
          title="Live from space album cover"
        />
      </Card>
      </>
    );
  }

  function SideCardRightNd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSideRight}>
        <div className={classes.detailSideRight}>
          <CardContent className={classes.content}>
          <div style={{display:"flex"}}>
              <Typography style={{marginBottom:"20px",marginRight:"10px"}} color="textSecondary">MENTAL HEALTH</Typography>
              <Typography style={{marginBottom:"20px", fontStyle:"italic"}} color="textSecondary">Popular Topic</Typography>
            </div>
            <Typography component="h5" variant="h5">
            The complete guide to Forms in React
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              When Bill Gates first met Warren Buffett, their host...
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://www.bing.com/th?id=OIP.COlH6LR6_HD3-ExIJPH43QHaE8&pid=Api&rs=1"
          title="Live from space album cover"
        />
      </Card>
    );
  }

  function SideCardRightRd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSideRight}>
        <div className={classes.detailSideRight}>
          <CardContent className={classes.content}>
            <div style={{display:"flex"}}>
              <Typography style={{marginBottom:"20px",marginRight:"10px"}} color="textSecondary">CULTURE</Typography>
              <Typography style={{marginBottom:"20px", fontStyle:"italic"}} color="textSecondary">Popular Topic</Typography>
            </div>
            <Typography component="h5" variant="h5">
            Warren Buffett: “Really Successful People Say No To Almost Everything”
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              across all continents except Antarctica Lizards are a
              reptiles, with over 6,000 
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://www.bing.com/th?id=OIP.d34Hys7QoL6n8ypg6H6qLwHaE7&pid=Api&rs=1"
        />
      </Card>
    );
  }

  function SideCardNoImage() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <div className={classes.details}>
          <CardContent className={classes.content}> 
            <div style={{display:"flex"}}>
              <Typography style={{fontSize:"34px",marginRight:"20px", color:"rgba(0,0,0,0.15)"}}>01</Typography>
              <div style={{display:"flex", flexDirection:"column"}}>
                <Typography component="h6" variant="h6">
                  Three Magical Phrases to Comfort a Dying Person
                </Typography>
              
                <Typography variant="subtitle1" color="textSecondary">
                  Jenny Harrington in Human Parts
                </Typography>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  function SideCardNoImageNd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <div className={classes.details}>
          <CardContent className={classes.content}> 
            <div style={{display:"flex"}}>
              <Typography style={{fontSize:"34px",marginRight:"20px", color:"rgba(0,0,0,0.15)"}}>02</Typography>
              <div style={{display:"flex", flexDirection:"column"}}>
                <Typography component="h6" variant="h6">
                  Stop Obsessing About Focus
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sílvia Bastos in Better Humans
                </Typography>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  function SideCardNoImageRd() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.cardSide}>
        <div className={classes.details}>
          <CardContent className={classes.content}> 
            <div style={{display:"flex"}}>
              <Typography style={{fontSize:"34px",marginRight:"20px", color:"rgba(0,0,0,0.15)"}}>03</Typography>
              <div style={{display:"flex", flexDirection:"column"}}>
                <Typography component="h6" variant="h6">
                  Stop Spending So Much Time In Your Head
                </Typography>
              
                <Typography variant="subtitle1" color="textSecondary">
                  Jason Arnold
                </Typography>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  const useStyles = makeStyles(theme => ({
    root: {
      width: "90%",
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      pointerEvents: 'none',
      boxShadow: "none",
    },
    card: {
      maxWidth: 600,
      height: "100%",
      boxShadow: "none",
      margin: "0!important",
      padding: "0!important",
      border: "0!important",
      boxShadow: "none!important",
    },
  
    cardSide:{
      display: 'flex',
      height: "110px",
      boxShadow: "none",
      margin: "0!important",
      padding: "0!important",
      border: "0!important",
      boxShadow: "none!important",
  
    },
  
    cardSideRight:{
      display: 'flex',
      height: "200px",
      boxShadow: "none",
      margin: "0!important",
      padding: "0!important",
      border: "0!important",
      boxShadow: "none!important",
    },
  
    details: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      width:"75%"
    },
  
    detailSideRight: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "right",
      textAlign: 'left',
      width:"55%",
      marginRight:"80px"
    },
  
    content: {
      flex: '1 0 auto',
      width: '100%',
    },
    cover: {
      width: "25%",
    },
  
    image:{
      height: "100%",
    },
  
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    
    media: {
      height: 400,
    },
  
    mediaSmall:{
      height:220
    }
  }));