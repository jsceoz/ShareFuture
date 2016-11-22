'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar';
import $ from 'jquery'

require('styles/login/LoginBox.css');

class LoginBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      open:false,
      msg:""
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username:e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password:e.target.value
    })
  }

  login() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/customer/login/",
      data:{
        uname:this.state.username,
        pwd:this.state.password
      }
    }).done(function (data) {
      console.log(data);
      if (data.token == "NULL") {
        self.setState({
          open:true,
          msg:"登录失败"
        })
      }
      else {
        self.setState({
          open:true,
          msg:"登录成功"
        });
        $("#app").attr('data-token', data.token);
        $("#app").attr('data-username', self.state.username);
        setTimeout("window.location.href='#/home'",1000);
      }
    })
  }

  register() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/customer/register/",
      data:{
        uname:this.state.username,
        pwd:this.state.password
      }
    }).done(function (data) {
      console.log(data);
      if(data.state == 200) {
        self.setState({
          open:true,
          msg:"注册成功,请点击登录"
        })
      }
    })
  }

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
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
          />
          <TextField
            className='login-box-text-field'
            hintText='密码'
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
          <div className="login-box-button-wrapper">
            <RaisedButton
              className='login-box-login-btn'
              label='登录'
              primary={true}
              onClick={this.login.bind(this)}
            />
            <FlatButton
              className="login-box-register-btn"
              label='还没有账号，现在注册'
              primary={true}
              onClick={this.register.bind(this)}
            />
          </div>
        </div>
        <div className="footer">
          ©AlphaSeeker
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.msg}
          autoHideDuration={2000}
        />
      </div>
    );
  }
}

LoginBoxComponent.displayName = 'LoginLoginBoxComponent';

// Uncomment properties you need
// LoginBoxComponent.propTypes = {};
// LoginBoxComponent.defaultProps = {};

export default LoginBoxComponent;
