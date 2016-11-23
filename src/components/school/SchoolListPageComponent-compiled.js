'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/school/SchoolListPage.css');

var SchoolListPageComponent = function (_React$Component) {
  _inherits(SchoolListPageComponent, _React$Component);

  function SchoolListPageComponent() {
    _classCallCheck(this, SchoolListPageComponent);

    return _possibleConstructorReturn(this, (SchoolListPageComponent.__proto__ || Object.getPrototypeOf(SchoolListPageComponent)).apply(this, arguments));
  }

  _createClass(SchoolListPageComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'schoollistpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u671F\u8D27\u5B66\u5802',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(_MenuItem2.default, {
            primaryText: '\u57FA\u7840\u77E5\u8BC6',
            onClick: function onClick() {
              return window.location.href = "#/school/list/基础知识";
            }
          }),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(_MenuItem2.default, {
            primaryText: '\u9AD8\u624B\u8FDB\u9636',
            onClick: function onClick() {
              return window.location.href = "#/school/list/高手进阶";
            }
          }),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(_MenuItem2.default, {
            primaryText: '\u98CE\u9669\u63A7\u5236',
            onClick: function onClick() {
              return window.location.href = "#/school/list/风险控制";
            }
          }),
          _react2.default.createElement(_Divider2.default, null)
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 })
      );
    }
  }]);

  return SchoolListPageComponent;
}(_react2.default.Component);

SchoolListPageComponent.displayName = 'SchoolSchoolListPageComponent';

// Uncomment properties you need
// SchoolListPageComponent.propTypes = {};
// SchoolListPageComponent.defaultProps = {};

exports.default = SchoolListPageComponent;

//# sourceMappingURL=SchoolListPageComponent-compiled.js.map