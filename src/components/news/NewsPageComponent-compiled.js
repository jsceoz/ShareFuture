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

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/news/NewsPage.css');

var NewsPageComponent = function (_React$Component) {
  _inherits(NewsPageComponent, _React$Component);

  function NewsPageComponent(props) {
    _classCallCheck(this, NewsPageComponent);

    var _this = _possibleConstructorReturn(this, (NewsPageComponent.__proto__ || Object.getPrototypeOf(NewsPageComponent)).call(this, props));

    _this.state = {
      newsList: [],
      n: 1
    };
    return _this;
  }

  _createClass(NewsPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/news/get_part/?n=" + self.state.n + "&k=10"
      }).done(function (data) {
        self.setState({
          newsList: data
        });
      });
    }
  }, {
    key: 'toNewsDetail',
    value: function toNewsDetail(id) {
      window.location.href = "#/news/detail/" + id;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'newspage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u8D44\u8BAF',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          _List.List,
          { className: 'news-list' },
          this.state.newsList.map(function (news) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_List.ListItem, {
                primaryText: news.title,
                onClick: function onClick() {
                  return _this2.toNewsDetail(news.id);
                }
              }),
              _react2.default.createElement(_Divider2.default, null)
            );
          })
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 1 })
      );
    }
  }]);

  return NewsPageComponent;
}(_react2.default.Component);

NewsPageComponent.displayName = 'NewsNewsPageComponent';

// Uncomment properties you need
// NewsPageComponent.propTypes = {};
// NewsPageComponent.defaultProps = {};

exports.default = NewsPageComponent;

//# sourceMappingURL=NewsPageComponent-compiled.js.map