import React, { Component } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Avatar from '@material-ui/core/Avatar';

class Comment extends Component{

constructor(props) {
    super(props);
    this.state = {
        countComent: 1,
        add : "",
        data: [ 'This is first comment' ]
    }
}

onChange = event => {
    this.setState({ add: event.target.value });
  };

onSubmit = event => {
    this.setState({
      add: "",
      countComent: this.state.countComent +1,
      data: [...this.state.data, this.state.add]
    });
};

addData = event => {
    if (event.keyCode === 13) {
        if (document.getElementById("comment-textarea").value !== "") {
            this.onSubmit();
            document.getElementById("comment-textarea").value = "";
        }
    }
};

render(){
    return(
      <div className="app-comment-body">
        <div className="app-comment-body-top">
          <div className="app-comment-post-title-text-box">
            <div className="app-comment-text-bold">Showing responses for:</div>
          </div>
          <div className="app-comment-post-title-box">
            <div className="app-comment-line-text-icon"> 
              <div className="app-comment-post-title-text-child">
                <div className="app-comment-text">
                    If You Only Read a Few Books in 2018, Read These
                </div>
              </div> 
             <div className="app-comment-response-icon">
              <div><ThumbUpAltIcon/>  12k</div>
              <div><ChatBubbleIcon/>  {this.state.countComent} k</div>
             </div>
             </div>
             <div className="app-comment-text-grey">
                Ryan Holiday
             </div>
          </div>
        </div>
        <div className="app-comment-body-bottom">
          <div className="app-comment-content-body">
            <div className="app-comment-post-content-text-box">
                <div className="app-comment-text-bold">Responses</div>
            </div>
            <div className="app-comment-post-content-box">
                <div className="app-author-avatar-comment">
                    <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                </div>
                <textarea className="app-comment-input" 
                    id ="comment-textarea"
                    placeholder="Write a response . . ."
                    onKeyUp={this.addData}
                    onChange={this.onChange}
                >  
                </textarea>
            </div>
            {this.state.data.map((item,index) =>{
            return (
                <div className="app-comment-post-content-box-other-user">
                    <div style={{display:'flex', height: '100%',flexDIrection:'column'}}>
                        <div className="app-author-avatar-comment-other-user">
                            <div>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="app-comment-post-title-text-child">
                    <div className="app-comment-text-medium" key={index}>
                        {item}
                    </div>    
                    </div> 
                </div>
            )
           })
        }

          </div>
        </div>
        </div>
    ); 
  }
}

export default Comment;