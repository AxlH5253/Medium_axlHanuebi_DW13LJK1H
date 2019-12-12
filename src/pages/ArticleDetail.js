import React, { Component } from 'react';
import '../App.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';


class ArticleDetail extends Component{
  render(){
    return(
      <div className="app-body">
          <Content/>
      </div>
    ); 
  }
}

class Content extends Component{
  render(){
    return(
      <>
      <div className="app-article-header">
        <img className="app-medium-icon" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"></img>
        <div className="app-header-div">
          <div><SearchSharpIcon></SearchSharpIcon></div>
          <div><NotificationsNoneOutlinedIcon ></NotificationsNoneOutlinedIcon ></div>
          <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
        </div>
      </div>
      
      <div className="app-article-subheader">
        <img className="app-mision-icon" src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png"></img>
        <div className="app-article-subheader-text">MISION ORIGINAL | SUBSCRIBE</div>
      </div>

      <div className="app-article-body">
        <img style={{width:"87%"}} src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"></img>
        <div className="app-article-title">If You Only Read A Few Book In 2018, Read These</div>
        <div className="app-article-author">
          <Avatar style={{margin:"10px 10px 10px 0px"}} alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" />
            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{display:"flex"}}>
                <div className="app-article-author-name">Ryan Holiday</div>
                <button className="app-follow-btn">Follow</button>
              </div>
              <div className="app-article-date-post">Jun 26, 2018. 10 min read</div>
            </div>
        </div>
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
      </>
    )
  }
}

export default ArticleDetail;