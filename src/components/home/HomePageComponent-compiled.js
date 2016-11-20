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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _timeline = require('material-ui/svg-icons/action/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _verifiedUser = require('material-ui/svg-icons/action/verified-user');

var _verifiedUser2 = _interopRequireDefault(_verifiedUser);

var _store = require('material-ui/svg-icons/action/store');

var _store2 = _interopRequireDefault(_store);

var _toc = require('material-ui/svg-icons/action/toc');

var _toc2 = _interopRequireDefault(_toc);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/home/HomePage.css');

var style = {
  width: 40,
  height: 40
};

var HomePageComponent = function (_React$Component) {
  _inherits(HomePageComponent, _React$Component);

  function HomePageComponent(props) {
    _classCallCheck(this, HomePageComponent);

    var _this = _possibleConstructorReturn(this, (HomePageComponent.__proto__ || Object.getPrototypeOf(HomePageComponent)).call(this, props));

    _this.state = {
      dataIndex: 0,
      dataList: [],
      newsList: []
    };
    return _this;
  }

  _createClass(HomePageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/news/get_part/?n=1&k=5"
      }).done(function (data) {
        console.log(data);
        self.setState({
          newsList: data
        });
      });
    }
  }, {
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
            _react2.default.createElement(
              _IconButton2.default,
              { className: 'homepage-icon-btn', iconStyle: style },
              _react2.default.createElement(_timeline2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            _react2.default.createElement(
              _IconButton2.default,
              { className: 'homepage-icon-btn', iconStyle: style },
              _react2.default.createElement(_verifiedUser2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            _react2.default.createElement(
              _IconButton2.default,
              { className: 'homepage-icon-btn', iconStyle: style },
              _react2.default.createElement(_store2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'homepage-header-icon' },
            _react2.default.createElement(
              _IconButton2.default,
              { className: 'homepage-icon-btn', iconStyle: style },
              _react2.default.createElement(_toc2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'homepage-header-p-wrapper' },
          _react2.default.createElement(
            'span',
            null,
            '\u671F\u6307\u9884\u6D4B'
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u98CE\u9669\u63A7\u5236'
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u671F\u8D27\u5B66\u5802'
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u671F\u8D27\u8BBA\u575B'
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
          this.state.newsList.map(function (news) {
            return _react2.default.createElement(_List.ListItem, {
              primaryText: news.title
            });
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