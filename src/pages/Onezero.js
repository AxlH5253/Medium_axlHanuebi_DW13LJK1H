import React, { Component } from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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

  cardSide:{
    display: 'flex',
    width: '100%',
    height: '100%',
    boxShadow: "none",
    margin: "0!important",
    padding: "0!important",
    border: "0!important",
    boxShadow: "none!important",

  },

  details: {
    display: 'flex',
    width:"10%"
  },

  content: {
    color: 'white',
    display: 'flex',
    width: '50%',
    flexDirection:'coloumn',
    alignItems: 'center',
    backgroundColor: '#8934eb',
  },
  cover: {
    width: "100%",
    height: "450px",
  },

}));

function SideCardLeft() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.cardSide}>
      <CardMedia
        className={classes.cover}
        image="https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
        title="Live from space album cover"
      />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h2">
            <div class="app-onezero-font" style={{fontSize:'40px',width:'93%'}}>The Influencer and the Hit Man</div>
          </Typography>
        </CardContent>
    </Card>
  );
}

 export default function OneZero() {
    
  const classes = useStyles();

  return (
  <div className={classes.root}>
      <div className="app-onzero-headline">
         <img className="app-onzero-icon" src='https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png'/>
         <div class="app-onezero-font"><span style={{color:"#8934eb"}}>The front lines of the future.</span> A Medium publication about tech and science.</div>
      </div>
      <Grid container spacing={3} style={{ borderBottom: "1px solid #dae3dc", paddingBottom: "20px"}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SideCardLeft/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SideCardLeft/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SideCardLeft/></Paper>
        </Grid>
      </Grid>
  </div>
  );
}

  