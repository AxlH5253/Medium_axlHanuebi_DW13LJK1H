import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import '../App.css';

class RelatedArticle extends Component{
    render(){
    return(
        <div className="app-related-article-body">
          <div className="app-related-article-child">
            <GridContent/>
            <Footer/>
          </div>
        </div>
    ); 
  }
}

function Footer () {
  const classes = useStyles();
  return(
      <div style={{width:'100%', height:'400px',background:'rgba(0,0,0,0.9)', display:'flex',justifyContent:'center', alignItems:'center'}}>
      <div style={{width:'95%', display:'flex', alignItems:'flex-start', borderBottom:'1px solid #373835'}}>
       <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            <SideCardNoImage/>
          </Grid>
          <Grid item xs>
            <SideCardNoImage/>
          </Grid>
          <Grid item xs>
            <SideCardNoImage/>
          </Grid>
        </Grid>
      </div>
      </div>

      </div>
    )
}

function GridContent() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <div className={classes.panel}>More From Medium</div>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}><ContentCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><ContentCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><ContentCard/></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  
function ContentCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
              More from mission.org
          </Typography>
          <CardMedia
            className={classes.media}
            image="https://bestindianweddingphotographer.files.wordpress.com/2013/11/reflection-photography.jpg"
            title="Contemplative Reptile"
          />
          <CardContent
            className={classes.content}
          >
            <Typography 
                gutterBottom variant="h5" 
                component="h2"
                className={classes.head}
            >
              Lizard
            </Typography>
            <ProfilAuthor/>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  function ProfilAuthor() {
    return(
     <div style={{width:'100%', background:'#f7f7f7'}} className="app-article-author">
      <Avatar style={{margin:"10px 10px 10px 0px"}} alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" />
        <div style={{display:"flex", width:'100%'}}>
          <div style={{display:'flex',width:'60%', flexDirection:'column',alignItems:'flex-start'}}>
            <div className="app-article-author-name">Ryan Holiday</div>
            <div className="app-article-date-post">Jun 26, 2018. 10 min read</div>
          </div>
          <div style={{display:'flex', width:'40%',justifyContent:'flex-end', alignItems:'flex-end'}}>
            <div style={{display:'flex',alignItems:'space-between', paddingRight:'10px'}}><ThumbUpAltIcon/> <Typography>88</Typography></div>
            <div><TurnedInNotIcon/></div>
          </div>
        </div>
        
    </div>
    )
  }

  function SideCardNoImage() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card} style={{background:'rgba(0,0,0,0)', color:'#fff'}}>
        <div className={classes.details} >
          <CardContent className={classes.content}> 
            <div style={{display:"flex"}}>
              <div style={{display:"flex", flexDirection:"column"}}>
                <Typography style={{marginBottom:'20px',}} component="h5" variant="h6">
                  Discover Medium
                </Typography>
              
                <Typography variant="subtitle1" style={{color:'#fff'}}>
                Welcome to a place where words matter. On Medium, smart 
                voices and original ideas take center stage - with no ads in 
                sight. Watch
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
      flexGrow: 1,
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      width: '100%'
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: "none",
      pointerEvents: 'none',
      backgroundColor: '#f7f7f7'
    },
    card: {
        width: '100%',
        boxShadow: "none",
        backgroundColor: '#f7f7f7'
    },

    media: {
        width: '100%',
        height: 250,
    },

    panel:{
      display: 'flex',
      alignItems: 'center',
      width:'98%', 
      height:'50px',
      fontWeight: 'bold',
      paddingTop: '50px',
      borderBottom: '1px solid grey',
      backgroundColor: '#f7f7f7',
      fontSize: '30px'
    },

    content:{
        fontFamily: 'sans-serif',
        corlor: 'rgba(0,0,0,0.84)',
        width: '100%',
        textAlign: 'left',
        alignItems: 'flex-StaticRange',
        marginBottom: '10px',
        paddingLeft: '0',
        fontWeight: 'bold'
    },
    head:{
      color: 'black',
      fontFamily: 'sans-serif',
      textAlign: 'left',
      corlor: 'rgba(0,0,0,0.54)',
      fontWeight: 'bold'
    }
}));

export default RelatedArticle;