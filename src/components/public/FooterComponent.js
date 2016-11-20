'use strict';

import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconHome from 'material-ui/svg-icons/action/home'
import IconToday from 'material-ui/svg-icons/action/today'
import IconTrendingUp from 'material-ui/svg-icons/action/trending-up'
import IconAccountBox from 'material-ui/svg-icons/action/account-box'

require('styles/public/Footer.css');

class BottomNavigationExampleSimple extends Component {


  select(index){
    this.setState({selectedIndex: index});
    switch(index)
    {
      case 0:
        window.location.href="#/map";
        break;
      case 1:
        window.location.href="#/message/";
        break;
      case 2:
        window.location.href="#/friend";
        break;
      case 3:
        window.location.href="#/mine";
    }

  }

  render() {
    return (
      <div className="footer-component">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.props.index}>
            <BottomNavigationItem
              label="首页"
              icon={<IconHome />}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="资讯"
              icon={<IconToday/>}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="行情"
              icon={<IconTrendingUp/>}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="账户"
              icon={<IconAccountBox />}
              onClick={() => this.select(3)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;

