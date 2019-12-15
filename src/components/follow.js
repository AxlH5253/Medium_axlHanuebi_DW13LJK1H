import React from 'react';
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration : 'none',
  color : 'rgba(0,0,0,0.54)'
}

export default function Follow() {
    return (
      <div className="app-follow-body">
          <div className="app-follow-topic">
              <div className="app-follow-topic-item">Books</div>
              <div className="app-follow-topic-item">Self Improvement</div>
              <div className="app-follow-topic-item">Productivity</div>
              <div className="app-follow-topic-item">Life</div>
              <div className="app-follow-topic-item">Life Lessons</div>
          </div>
          <div className="app-follow-social">
              <div className="app-follow-clap">
                <div className="app-clap-avatar">
                  <Avatar alt="Remy Sharp" src="https://static.thenounproject.com/png/1085294-200.png" />
                </div>
              </div>
              <div className="app-clap-text">54k Claps</div>
              <div className="app-follow-social-icon">
                <div><TwitterIcon fontSize="large"/></div>
                <div><FacebookIcon fontSize="large"/></div>
                <div><BookmarkBorderIcon fontSize="large"/></div>
                <div><MoreHorizIcon fontSize="large"/></div>
              </div>
          </div>
          <div className="app-follow-author">
              <div className="app-author-avatar">
                <Avatar style={{width:'100%', height:'100%'}} alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" />
              </div>
              <div className="app-about-author">
                <div style={{fontSize: '15px'}}>Writen by</div>
                <div style={{color: 'rgba(0, 0, 0, 0.84)', fontSize:'20px'}}>Ryan Holiday</div>
                <div style={{fontSize: '16px'}}>
                    Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & 
                    ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'row-reverse', width:'30%'}}>
                <button className="app-follow-btn" style={{width:'80px',height:'40px'}}>Follow</button>
              </div>
          </div>

          <div className="app-follow-author">
              <div className="app-author-avatar">
                <Avatar style={{width:'100%', height:'100%'}} alt="Remy Sharp" 
                src="https://miro.medium.com/fit/c/160/160/1*kFWwYehzjJIhgw8hTygfHw.png" />
              </div>
              <div className="app-about-author">
                <div style={{color: 'rgba(0, 0, 0, 0.84)', fontSize:'20px'}}>Mission.org</div>
                <div style={{fontSize: '16px'}}>
                  A network of business & 
                  tech podcasts designed to accelerate learning. Selected as “Best of 2018” by Apple. Mission.org
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'row-reverse', width:'30%'}}>
                <button className="app-follow-btn" style={{width:'80px',height:'40px'}}>Follow</button>
              </div>
          </div>

          <div className="app-follow-response-btn">
            <Link to="/comment" style={linkStyle}>
            <button className="app-follow-btn" 
              style={{width:'100%',height:'80%', borderRadius: '10px', fontSize:'20px'}}>
                See Response (216)
            </button>
            </Link>
          </div>

      </div>
    );
  }