'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery';

require('styles/news/NewsDetail.css');

class NewsDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem:{}
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/news/get_one_by_id/?id="+this.props.params.id,
    }).done(function (data) {
      console.log(data);
      self.setState({
        newsItem:data
      })
    })
  }
  render() {
    return (
      <div className="newsdetail-component">
        <AppBar
          title={this.state.newsItem.title}
          showMenuIconButton={false}
        />
        <h1 className="news-detail-title">{this.state.newsItem.title}</h1>
        <Divider/>
        <p className="news-detail-p">{this.state.newsItem.content}</p>
        <div className="placeholder"></div>
        <Footer index={1}/>
      </div>
    );
  }
}

NewsDetailComponent.displayName = 'NewsNewsDetailComponent';

// Uncomment properties you need
// NewsDetailComponent.propTypes = {};
// NewsDetailComponent.defaultProps = {};

export default NewsDetailComponent;
