import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
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

 export default function OneZero() {
    
  const classes = useStyles();

  return (
  <>
  <div className="app-article-header" style={{width:'99.7%'}}>
    <Link to="/" style={linkStyle}>
      <img className="app-medium-icon" alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png">
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
         <img className="app-onzero-icon" alt="Remy Sharp" src='https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png'/>
         <div className="app-onezero-font"><span style={{color:"#8934eb"}}>The front lines of the future.</span> A Medium publication about tech and science.</div>
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
        <Grid item xs={12}>
          <div style={{width:'100%', display:'flex',alignItems:'center',flexDirection:'column'}}>
            <RelatedArticleCard/>
            <RelatedArticleCard/>
            <RelatedArticleCard/>
            <RelatedArticleCard/>
          </div>
        </Grid>
      </Grid>
  </div>
  </>
  );
}

function CardAnimation() {
  const classes = useStyles();

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

function SideCardLeft() {
  const classes = useStyles();

  return (
    <Card className={classes.cardSide}>
      <CardMedia
        className={classes.cover}
        image="https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
        title="Live from space album cover"
      />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h2">
            <div className="app-onezero-font" style={{fontSize:'40px',width:'93%'}}>The Influencer and the Hit Man</div>
          </Typography>
        </CardContent>
    </Card>
  );
}

function SideCardRight() {
  const classes = useStyles();

  return (
    <Card className={classes.cardSide}>
      <CardContent className={classes.contentRight}>
        <Typography component="h5" variant="h2">
          <div className="app-onezero-font" style={{fontSize:'40px',width:'93%'}}>Uber Delivery Worker Track Thieves Trough a Secret Network</div>
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

function RelatedArticleCard() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.cardSideRightRelated}>
      <div className={classes.detailSideRightRelated}>
        <CardContent className={classes.contentRelated}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <Typography component="h5" variant="h5">
              An FBI Behaviour Expert Explains How
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              It’s not always about you when
              An FBI Behaviour Expert Explains 
              How to Quickly Build Trust With Anyone
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.coverRelated}
        image="https://www.bing.com/th?id=OIP.hRRLQZMV-E0pkGzZvBxEUgHaEo&pid=Api&rs=1"
        title="Live from space album cover"
      />
    </Card>
    </>
  );
}

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    height: '60%',
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

  contentRelated: {
    color: 'rgba(0,0,0,0.94)',
    display: 'flex',
    width: '100%',
    flexDirection:'coloumn',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  coverRelated: {
    width: "50%"
  },

  cardSideRightRelated:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "right",
    textAlign: 'left',
    width:"50%",
    height:'250px',
    marginRight:"80px",
    background: 'white !important',
    marginTop: '90px' 

  },

  detailSideRightRelated: {
    display: 'flex',
    width:"100%"
  },

}));


  