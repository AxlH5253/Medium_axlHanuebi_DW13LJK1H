import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';

import {Link} from "react-router-dom";

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
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

  contentRight: {
    color: 'rgba(0,0,0,0.74)',
    display: 'flex',
    width: '50%',
    flexDirection:'coloumn',
    alignItems: 'center',
    backgroundColor: '#fff',
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

function SideCardRight() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.cardSide}>
      <CardContent className={classes.contentRight}>
        <Typography component="h5" variant="h2">
          <div class="app-onezero-font" style={{fontSize:'40px',width:'93%'}}>Uber Delivery Worker Track Thieves Trough a Secret Network</div>
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image="https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
        title="Live from space album cover"
      />
    </Card>
  );
}

function CardAnimation() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.cardSide}>
      <CardMedia
        className={classes.cover}
        image="https://gifimage.net/wp-content/uploads/2017/09/background-gif-tumblr-rain-9.gif"
        title="Live from space album cover"
      />
    </Card>
  );
}
 export default function OneZero() {
    
  const classes = useStyles();

  return (
  <>
  <div className="app-article-header">
    <Link to="/home" style={linkStyle}>
      <img className="app-medium-icon" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png">
      </img>
    </Link>
    <div className="app-header-div">
      <div><SearchSharpIcon></SearchSharpIcon></div>
      <div><NotificationsNoneOutlinedIcon ></NotificationsNoneOutlinedIcon ></div>
      <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
    </div>
  </div>

  <div className={classes.root}>
      <div className="app-onezero-headline">
         <img className="app-onzero-icon" src='https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png'/>
         <div class="app-onezero-font"><span style={{color:"#8934eb"}}>The front lines of the future.</span> A Medium publication about tech and science.</div>
         <button className="app-follow-btn-onezero">Follow</button>
      </div>
      <Grid container spacing={3} style={{ borderBottom: "1px solid #dae3dc", paddingBottom: "20px"}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SideCardLeft/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>< CardAnimation/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SideCardRight/></Paper>
        </Grid>
        <div className="app-article-body" style={{width:"100%"}}>
          <div className="app-article-title">Keep Your Home Screen Orginized</div>
          <div className="app-article-content">
            <p>
              So how did the classical Latin become so incoherent? According to McClintock, 
              a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to 
              provide placeholder text to mockup various fonts for a type specimen book.
            </p>

            <p>
              It's difficult to find examples of lorem ipsum in use before Letraset 
              made it popular as a dummy text in the 1960s, 
              although McClintock says he remembers coming across the lorem ipsum passage in 
              a book of old metal type samples. So far he hasn't relocated where he once saw the passage, 
              but the popularity of Cicero in the 15th century supports the theory that the filler text has 
              been used for centuries.
            </p>

            <p>
              It's difficult to find examples of lorem ipsum in use before Letraset 
              made it popular as a dummy text in the 1960s, 
              although McClintock says he remembers coming across the lorem ipsum passage in 
              a book of old metal type samples. So far he hasn't relocated where he once saw the passage, 
              but the popularity of Cicero in the 15th century supports the theory that the filler text has 
              been used for centuries.
            </p>

        </div>
        </div>
      </Grid>
  </div>
  </>
  );
}

  