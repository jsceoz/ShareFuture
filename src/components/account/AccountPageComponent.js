'use strict';

import React from 'react';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Delete from 'material-ui/svg-icons/action/delete';
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery'

require('styles/account/AccountPage.css');


class AccountPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info:{},
      username:"jsss"
    }
  }

  componentDidMount() {
    this.getToken();
    let token =this.state.token;
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/get_account_money/",
      async:true,
      data:{
        token:$("#app").attr("data-token"),
        username:$("#app").attr("data-username")
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  getToken() {
    this.setState({
      token:$("#app").attr("data-token")
    })
  }

  render() {
    return (
      <div className="accountpage-component">
        <AppBar
          title="账户"
          showMenuIconButton={false}
        />
        <Paper className="account-header-info-wrapper">
          <div className="account-header-list">
            <li>总资产<p></p></li>
            <li>可用保证金</li>
            <li>可用保证金比率</li>
          </div>
          <div className="account-header-list">
            <li>当日盈亏</li>
            <li>实现盈亏</li>
            <li>浮动盈亏</li>
          </div>
        </Paper>
        <Paper className="paper-menu">
          <Menu>
            <Divider/>
            <MenuItem primaryText="委托/撤单" leftIcon={<Delete/>} />
            <Divider/>
            <MenuItem primaryText="成交记录" leftIcon={<Delete/>} />
            <Divider/>
            <MenuItem primaryText="资产分析" leftIcon={<Delete/>}/>
            <Divider/>
            <MenuItem primaryText="账户充值" leftIcon={<Delete/>}/>
          </Menu>
        </Paper>
        <Footer index={3} />
      </div>
    );
  }
}

AccountPageComponent.displayName = 'AccountAccountPageComponent';

// Uncomment properties you need
// AccountPageComponent.propTypes = {};
// AccountPageComponent.defaultProps = {};

export default AccountPageComponent;
