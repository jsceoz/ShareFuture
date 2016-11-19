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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/login/LoginBox.css');

var LoginBoxComponent = function (_React$Component) {
  _inherits(LoginBoxComponent, _React$Component);

  function LoginBoxComponent() {
    _classCallCheck(this, LoginBoxComponent);

    return _possibleConstructorReturn(this, (LoginBoxComponent.__proto__ || Object.getPrototypeOf(LoginBoxComponent)).apply(this, arguments));
  }

  _createClass(LoginBoxComponent, [{
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
            hintText: '\u7528\u6237\u540D'
          }),
          _react2.default.createElement(_TextField2.default, {
            className: 'login-box-text-field',
            hintText: '\u5BC6\u7801',
            type: 'password'
          }),
          _react2.default.createElement(
            'div',
            { className: 'login-box-button-wrapper' },
            _react2.default.createElement(_RaisedButton2.default, {
              className: 'login-box-login-btn',
              label: '\u767B\u5F55',
              primary: true
            }),
            _react2.default.createElement(_FlatButton2.default, {
              className: 'login-box-register-btn',
              label: '\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF0C\u73B0\u5728\u6CE8\u518C',
              primary: true
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          '\xA9AlphaSeeker'
        )
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