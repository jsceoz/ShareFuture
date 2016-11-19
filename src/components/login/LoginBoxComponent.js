'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

require('styles/login/LoginBox.css');

class LoginBoxComponent extends React.Component {
  render() {
    return (
      <div className="loginbox-component">
        <AppBar
          title='注册/登录'
          showMenuIconButton={false}
        />
        <div className="login-box-text-field-wrapper">
          <TextField
            className='login-box-text-field'
            hintText='用户名'
          />
          <TextField
            className='login-box-text-field'
            hintText='密码'
            type='password'
          />
          <div className="login-box-button-wrapper">
            <RaisedButton
              className='login-box-login-btn'
              label='登录'
              primary={true}
            />
            <FlatButton
              className="login-box-register-btn"
              label='还没有账号，现在注册'
              primary={true}
            />
          </div>
        </div>
        <div className="footer">
          ©AlphaSeeker
        </div>
      </div>
    );
  }
}

LoginBoxComponent.displayName = 'LoginLoginBoxComponent';

// Uncomment properties you need
// LoginBoxComponent.propTypes = {};
// LoginBoxComponent.defaultProps = {};

export default LoginBoxComponent;
