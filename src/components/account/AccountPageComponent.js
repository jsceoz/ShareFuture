'use strict';

import React from 'react';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

require('styles/account/AccountPage.css');

class AccountPageComponent extends React.Component {
  render() {
    return (
      <div className="accountpage-component">
        <AppBar
          title="账户"
          showMenuIconButton={false}
        />
        <Paper className="account-header-info-wrapper">
          <div className="account-header-list">
            <li>总资产<strong>111</strong></li>
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
            <MenuItem primaryText="委托/撤单" />
            <MenuItem primaryText="成交记录" />
            <MenuItem primaryText="资产分析" />
            <MenuItem primaryText="账户充值" />
          </Menu>
        </Paper>
      </div>
    );
  }
}

AccountPageComponent.displayName = 'AccountAccountPageComponent';

// Uncomment properties you need
// AccountPageComponent.propTypes = {};
// AccountPageComponent.defaultProps = {};

export default AccountPageComponent;
