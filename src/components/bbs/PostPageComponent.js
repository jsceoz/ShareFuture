'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery';

require('styles/bbs/PostPage.css');

class PostPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      content:"",
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
        content:data.article.content
      })
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
