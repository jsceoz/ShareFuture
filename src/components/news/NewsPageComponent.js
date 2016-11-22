'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery'


require('styles/news/NewsPage.css');

class NewsPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      n:1
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/news/get_part/?n=" + self.state.n + "&k=10"
    }).done(function (data) {
      self.setState({
        newsList:data
      })
    })
  }

  toNewsDetail(id) {
    window.location.href="#/news/detail/"+id;
  }



  render() {
    return (
      <div className="newspage-component">
        <AppBar
          title="资讯"
          showMenuIconButton={false}
        />
        <List className="news-list">
          {this.state.newsList.map((news) => (
            <div>
            <ListItem
              primaryText={news.title}
              onClick={() => this.toNewsDetail(news.id)}
            />
            <Divider/>
            </div>
          ))}
        </List>
        <Footer index={1} />
      </div>
    );
  }
}

NewsPageComponent.displayName = 'NewsNewsPageComponent';

// Uncomment properties you need
// NewsPageComponent.propTypes = {};
// NewsPageComponent.defaultProps = {};

export default NewsPageComponent;
