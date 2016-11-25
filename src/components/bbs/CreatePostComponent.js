'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Footer from '../public/FooterComponent'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery'

require('styles/bbs/CreatePost.css');

class CreatePostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      content:''
    }
  }

  handleTitleChange(e) {
    this.setState({
      title:e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit() {
    $.ajax({
      method:"POST",
      url:'http://121.201.68.143/bbs/addarticle/',
      data: {
        title:this.state.title,
        content:this.state.content,
        category:'技巧分析',
        token:$('#app').attr('data-token'),
        username:$('#app').attr('data-username')
      }
    })
  }

  render() {
    return (
      <div className="createpost-component">
        <AppBar
          title="发帖"
          showMenuIconButton={false}
        />
        <Footer index={0}/>
        <div className="post-input-wrapper">
          <TextField
            hintText="标题"
            floatingLabelText="标题"
            onChange={this.handleTitleChange.bind(this)}
          />
          <TextField
            hintText="帖子内容"
            floatingLabelText="发表新帖"
            multiLine={true}
            rows={2}
            onChange={this.handleContentChange.bind(this)}
          />
          <RaisedButton
            className="create-post-btn"
            label="发表"
            primary={true}
            fullWidth={true}
            onClick={this.handleSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

CreatePostComponent.displayName = 'BBSCreatePostComponent';

// Uncomment properties you need
// CreatePostComponent.propTypes = {};
// CreatePostComponent.defaultProps = {};

export default CreatePostComponent;
