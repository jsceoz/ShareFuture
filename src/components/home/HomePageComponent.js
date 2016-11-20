'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Footer from '../public/FooterComponent'

require('styles/home/HomePage.css');

class HomePageComponent extends React.Component {
  render() {
    return (
      <div className="homepage-component">
        <AppBar
          title="首页"
          showMenuIconButton={false}
        />
        <div className="homepage-header-icon-wrapper">
          <div className="homepage-header-icon">
            期指预测
          </div>
          <div className="homepage-header-icon">
            期指预测
          </div>
          <div className="homepage-header-icon">
            期指预测
          </div>
          <div className="homepage-header-icon">
            期指预测
          </div>
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
          <ListItem
            primaryText="新闻新闻新闻"
          />
          <ListItem
            primaryText="新闻新闻新闻"
          />
          <ListItem
            primaryText="新闻新闻新闻"
          />
          <ListItem
            primaryText="新闻新闻新闻"
          />
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
