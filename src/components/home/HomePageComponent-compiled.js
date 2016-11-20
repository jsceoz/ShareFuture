'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/home/HomePage.css');

var HomePageComponent = function (_React$Component) {
  _inherits(HomePageComponent, _React$Component);

  function HomePageComponent() {
    _classCallCheck(this, HomePageComponent);

    return _possibleConstructorReturn(this, (HomePageComponent.__proto__ || Object.getPrototypeOf(HomePageComponent)).apply(this, arguments));
  }

  _createClass(HomePageComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'homepage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u9996\u9875',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'div',
          { className: 'homepage-header-icon-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            '\u671F\u6307\u9884\u6D4B'
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            '\u671F\u6307\u9884\u6D4B'
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            '\u671F\u6307\u9884\u6D4B'
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            '\u671F\u6307\u9884\u6D4B'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'homepage-data-wrapper' },
          _react2.default.createElement(
            _Subheader2.default,
            null,
            '\u6570\u636E\u4E2D\u5FC3'
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-data' },
            _react2.default.createElement(
              'span',
              null,
              '\u4E0A\u8BC1\u6307\u6570'
            ),
            _react2.default.createElement(
              'span',
              null,
              '2127.22'
            ),
            _react2.default.createElement(
              'span',
              null,
              '-9.19'
            ),
            _react2.default.createElement(
              'span',
              null,
              '-0.46%'
            )
          )
        ),
        _react2.default.createElement(
          _List.List,
          { className: 'homepage-news-list-wrapper' },
          _react2.default.createElement(
            _Subheader2.default,
            null,
            '\u65B0\u95FB\u4E2D\u5FC3'
          ),
          _react2.default.createElement(_List.ListItem, {
            primaryText: '\u65B0\u95FB\u65B0\u95FB\u65B0\u95FB'
          }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: '\u65B0\u95FB\u65B0\u95FB\u65B0\u95FB'
          }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: '\u65B0\u95FB\u65B0\u95FB\u65B0\u95FB'
          }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: '\u65B0\u95FB\u65B0\u95FB\u65B0\u95FB'
          })
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 })
      );
    }
  }]);

  return HomePageComponent;
}(_react2.default.Component);

HomePageComponent.displayName = 'HomeHomePageComponent';

// Uncomment properties you need
// HomePageComponent.propTypes = {};
// HomePageComponent.defaultProps = {};

exports.default = HomePageComponent;

//# sourceMappingURL=HomePageComponent-compiled.js.map