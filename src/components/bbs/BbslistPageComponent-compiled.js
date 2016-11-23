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

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _create = require('material-ui/svg-icons/content/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/bbs/BbslistPage.css');

var BbslistPageComponent = function (_React$Component) {
  _inherits(BbslistPageComponent, _React$Component);

  function BbslistPageComponent(props) {
    _classCallCheck(this, BbslistPageComponent);

    var _this = _possibleConstructorReturn(this, (BbslistPageComponent.__proto__ || Object.getPrototypeOf(BbslistPageComponent)).call(this, props));

    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(BbslistPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/bbs/showlist/"
      }).done(function (data) {
        console.log(data);
        self.setState({
          list: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'bbslistpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u671F\u8D27\u8BBA\u575B',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          _List.List,
          null,
          this.state.list.map(function (item) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_List.ListItem, {
                primaryText: item.title,
                onClick: function onClick() {
                  return window.location.href = "#/bbs/detail/" + item.id;
                }
              }),
              _react2.default.createElement(_Divider2.default, null)
            );
          })
        ),
        _react2.default.createElement(
          _FloatingActionButton2.default,
          { className: 'btn-add-post' },
          _react2.default.createElement(_create2.default, null)
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 })
      );
    }
  }]);

  return BbslistPageComponent;
}(_react2.default.Component);

BbslistPageComponent.displayName = 'BBSBBSListPageComponent';

// Uncomment properties you need
// BbslistPageComponent.propTypes = {};
// BbslistPageComponent.defaultProps = {};

exports.default = BbslistPageComponent;

//# sourceMappingURL=BbslistPageComponent-compiled.js.map