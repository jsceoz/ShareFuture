'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

var _today = require('material-ui/svg-icons/action/today');

var _today2 = _interopRequireDefault(_today);

var _trendingUp = require('material-ui/svg-icons/action/trending-up');

var _trendingUp2 = _interopRequireDefault(_trendingUp);

var _accountBox = require('material-ui/svg-icons/action/account-box');

var _accountBox2 = _interopRequireDefault(_accountBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/public/Footer.css');

var BottomNavigationExampleSimple = function (_Component) {
  _inherits(BottomNavigationExampleSimple, _Component);

  function BottomNavigationExampleSimple() {
    _classCallCheck(this, BottomNavigationExampleSimple);

    return _possibleConstructorReturn(this, (BottomNavigationExampleSimple.__proto__ || Object.getPrototypeOf(BottomNavigationExampleSimple)).apply(this, arguments));
  }

  _createClass(BottomNavigationExampleSimple, [{
    key: 'select',
    value: function select(index) {
      this.setState({ selectedIndex: index });
      switch (index) {
        case 0:
          window.location.href = "#/home";
          break;
        case 1:
          window.location.href = "#/news/";
          break;
        case 2:
          window.location.href = "#/price";
          break;
        case 3:
          window.location.href = "#/account";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'footer-component' },
        _react2.default.createElement(
          _Paper2.default,
          { zDepth: 1 },
          _react2.default.createElement(
            _BottomNavigation.BottomNavigation,
            { selectedIndex: this.props.index },
            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
              label: '\u9996\u9875',
              icon: _react2.default.createElement(_home2.default, null),
              onClick: function onClick() {
                return _this2.select(0);
              }
            }),
            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
              label: '\u8D44\u8BAF',
              icon: _react2.default.createElement(_today2.default, null),
              onClick: function onClick() {
                return _this2.select(1);
              }
            }),
            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
              label: '\u884C\u60C5',
              icon: _react2.default.createElement(_trendingUp2.default, null),
              onClick: function onClick() {
                return _this2.select(2);
              }
            }),
            _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
              label: '\u8D26\u6237',
              icon: _react2.default.createElement(_accountBox2.default, null),
              onClick: function onClick() {
                return _this2.select(3);
              }
            })
          )
        )
      );
    }
  }]);

  return BottomNavigationExampleSimple;
}(_react.Component);

exports.default = BottomNavigationExampleSimple;

//# sourceMappingURL=FooterComponent-compiled.js.map