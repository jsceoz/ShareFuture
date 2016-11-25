'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'

require('styles/bbs/PostPage.css');

class PostPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      content:"",
      comment:[],
      commentVal:'发表评论'
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/bbs/showarticle/?id="+this.props.params.id
    }).done(function (data) {
      console.log(data);
      self.setState({
        title:data.article.title,
        content:data.article.content,
        comment:data.comment,
      })
    })
  }

  handleCommentChange(e) {
    this.setState({
      commentVal:e.target.value
    })
  }

  commentSubmit() {
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/bbs/addconment/",
      data:{
        articleid:this.props.params.id,
        parentid:'Null',
        comment:this.state.commentVal,
        username:$('#app').attr('data-username'),
        token:$('#app').attr('data-token')
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="postpage-component">
        <AppBar
          title="期货论坛"
          showMenuIconButton={false}
        />
        <h1 className="post-title">{this.state.title}</h1>
        <Divider/>
        <p className="post-p">{this.state.content}</p>
        <List>
          <Subheader>评论</Subheader>
          {this.state.comment.map((item) => (
            <ListItem
              primaryText={item.content}
              secondaryText={item.user}
            />
          ))}
        </List>
        <div className="post-comment-text-wrapper">
          <TextField
            className="comment-input"
            hintText="发表评论"
            value={this.state.commentVal}
            onChange={this.handleCommentChange.bind(this)}
          />
          <FlatButton
            className="comment-submit-btn"
            label="确定"
            primary={true}
            onClick={this.commentSubmit.bind(this)}
          />
        </div>
        <Footer index={0}/>
      </div>
    );
  }
}

PostPageComponent.displayName = 'BBSPostPageComponent';

// Uncomment properties you need
// PostPageComponent.propTypes = {};
// PostPageComponent.defaultProps = {};

export default PostPageComponent;
