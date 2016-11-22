'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/login/LoginBox.css');

var LoginBoxComponent = function (_React$Component) {
  _inherits(LoginBoxComponent, _React$Component);

  function LoginBoxComponent(props) {
    _classCallCheck(this, LoginBoxComponent);

    var _this = _possibleConstructorReturn(this, (LoginBoxComponent.__proto__ || Object.getPrototypeOf(LoginBoxComponent)).call(this, props));

    _this.state = {
      username: "",
      password: "",
      open: false,
      msg: ""
    };
    return _this;
  }

  _createClass(LoginBoxComponent, [{
    key: 'handleUsernameChange',
    value: function handleUsernameChange(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: 'login',
    value: function login() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/customer/login/",
        data: {
          uname: this.state.username,
          pwd: this.state.password
        }
      }).done(function (data) {
        console.log(data);
        if (data.token == "NULL") {
          self.setState({
            open: true,
            msg: "登录失败"
          });
        } else {
          self.setState({
            open: true,
            msg: "登录成功"
          });
          (0, _jquery2.default)("#app").attr('data-token', data.token);
          (0, _jquery2.default)("#app").attr('data-username', self.state.username);
          setTimeout("window.location.href='#/home'", 1000);
        }
      });
    }
  }, {
    key: 'register',
    value: function register() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/customer/register/",
        data: {
          uname: this.state.username,
          pwd: this.state.password
        }
      }).done(function (data) {
        console.log(data);
        if (data.state == 200) {
          self.setState({
            open: true,
            msg: "注册成功,请点击登录"
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'loginbox-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u6CE8\u518C/\u767B\u5F55',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'div',
          { className: 'login-box-text-field-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            className: 'login-box-text-field',
            hintText: '\u7528\u6237\u540D',
            value: this.state.username,
            onChange: this.handleUsernameChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            className: 'login-box-text-field',
            hintText: '\u5BC6\u7801',
            type: 'password',
            value: this.state.password,
            onChange: this.handlePasswordChange.bind(this)
          }),
          _react2.default.createElement(
            'div',
            { className: 'login-box-button-wrapper' },
            _react2.default.createElement(_RaisedButton2.default, {
              className: 'login-box-login-btn',
              label: '\u767B\u5F55',
              primary: true,
              onClick: this.login.bind(this)
            }),
            _react2.default.createElement(_FlatButton2.default, {
              className: 'login-box-register-btn',
              label: '\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF0C\u73B0\u5728\u6CE8\u518C',
              primary: true,
              onClick: this.register.bind(this)
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          '\xA9AlphaSeeker'
        ),
        _react2.default.createElement(_Snackbar2.default, {
          open: this.state.open,
          message: this.state.msg,
          autoHideDuration: 2000
        })
      );
    }
  }]);

  return LoginBoxComponent;
}(_react2.default.Component);

LoginBoxComponent.displayName = 'LoginLoginBoxComponent';

// Uncomment properties you need
// LoginBoxComponent.propTypes = {};
// LoginBoxComponent.defaultProps = {};

exports.default = LoginBoxComponent;

//# sourceMappingURL=LoginBoxComponent-compiled.js.map