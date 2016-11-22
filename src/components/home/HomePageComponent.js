'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Footer from '../public/FooterComponent';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconTimeline from 'material-ui/svg-icons/action/timeline'
import IconRP from 'material-ui/svg-icons/action/verified-user'
import IconSchool from 'material-ui/svg-icons/action/store'
import IconBBS from 'material-ui/svg-icons/action/toc'
import $ from 'jquery'


require('styles/home/HomePage.css');

const style = {
  width: 40,
  height: 40,
};

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIndex: 0,
      dataList: [],
      newsList:[]
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/news/get_part/?n=1&k=5"
    }).done(function (data) {
      console.log(data);
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
      <div className="homepage-component">
        <AppBar
          title="首页"
          showMenuIconButton={false}
        />
        <div className="homepage-header-icon-wrapper">
          <div className="homepage-header-icon">
            <IconButton className="homepage-icon-btn" iconStyle={style} onClick={() => window.location.href="#/price/"}>
              <IconTimeline />
            </IconButton>
          </div>
          <div className="homepage-header-icon">
            <IconButton className="homepage-icon-btn" iconStyle={style} onClick={() => window.location.href="#/setting/"}>
              <IconRP />
            </IconButton>
          </div>
          <div className="homepage-header-icon">
            <IconButton className="homepage-icon-btn" iconStyle={style} onClick={() => window.location.href="#/school/"}>
              <IconSchool />
            </IconButton>
          </div>
          <div className="homepage-header-icon">
            <IconButton className="homepage-icon-btn" iconStyle={style} onClick={() => window.location.href="#/bbs/"}>
              <IconBBS />
            </IconButton>
          </div>
        </div>
        <div className="homepage-header-p-wrapper">
          <span>期指预测</span>
          <span>风险控制</span>
          <span>期货学堂</span>
          <span>期货论坛</span>
        </div>
        <div className="homepage-data-wrapper">
          <Subheader>数据中心</Subheader>
          <div className="homepage-data">
            <span>上证指数</span>
            <span>2127.22</span>
            <span>-9.19</span>
            <span>-0.46%</span>
          </div>
        </div>
        <List className="homepage-news-list-wrapper">
          <Subheader>新闻中心</Subheader>
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
        <Footer index={0}/>
      </div>
    );
  }
}

HomePageComponent.displayName = 'HomeHomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;
