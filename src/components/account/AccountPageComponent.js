'use strict';

import React from 'react';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Delete from 'material-ui/svg-icons/action/delete';
import LineWeight from 'material-ui/svg-icons/action/line-weight'
import Description from 'material-ui/svg-icons/action/description'
import BackUp from 'material-ui/svg-icons/action/settings-backup-restore'
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery'

require('styles/account/AccountPage.css');


class AccountPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info:{
        available_money:0,
        available_money_ratio:0,
        floating_balance:0,
        realized_balance:0,
        today_balance:0,
        total_money:0
      },
      username:'jsss'
    }
  }

  componentDidMount() {
    $.ajax({
      method:'POST',
      url:'http://121.201.68.143/account/get_account_money/',
      data:{
        token:$('#app').attr('data-token'),
        username:$('#app').attr('data-username')
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  render() {
    return (
      <div className='accountpage-component'>
        <AppBar
          title="账户"
          showMenuIconButton={false}
        />
        <Paper className="account-header-info-wrapper">
          <div className="account-header-list">
            <li>总资产<p>{this.state.info.total_money}</p></li>
            <li>可用保证金<p>{this.state.info.available_money}</p></li>
            <li>可用保证金比率<p>{this.state.info.available_money_ratio}</p></li>
          </div>
          <div className="account-header-list">
            <li>当日盈亏<p>{this.state.info.today_balance}</p></li>
            <li>实现盈亏<p>{this.state.info.realized_balance}</p></li>
            <li>浮动盈亏<p>{this.state.info.floating_balance}</p></li>
          </div>
        </Paper>
        <Paper className="paper-menu">
          <Menu>
            <Divider/>
            <MenuItem primaryText="委托/撤单" leftIcon={<Delete/>} onClick={() =>　window.location.href='#/cancel/'}/>
            <Divider/>
            <MenuItem primaryText="成交记录" leftIcon={<LineWeight/>} onClick={() =>　window.location.href='#/record/'}/>
            <Divider/>
            <MenuItem primaryText="资产分析" leftIcon={<Description/>} onClick={() =>　window.location.href='#/analysis/'}/>
            <Divider/>
            <MenuItem primaryText="账户重置" leftIcon={<BackUp/>} onClick={() =>　window.location.href='#/reset/'}/>
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
