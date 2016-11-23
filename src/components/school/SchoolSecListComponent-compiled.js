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

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/school/SchoolSecList.css');

var SchoolSecListComponent = function (_React$Component) {
  _inherits(SchoolSecListComponent, _React$Component);

  function SchoolSecListComponent(props) {
    _classCallCheck(this, SchoolSecListComponent);

    var _this = _possibleConstructorReturn(this, (SchoolSecListComponent.__proto__ || Object.getPrototypeOf(SchoolSecListComponent)).call(this, props));

    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(SchoolSecListComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/school/get_category/?category=" + this.props.params.category
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
        { className: 'schoolseclist-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u671F\u8D27\u5B66\u5802',
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
                  return window.location.href = "#/school/detail/" + item.id;
                }
              }),
              _react2.default.createElement(_Divider2.default, null)
            );
          })
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 })
      );
    }
  }]);

  return SchoolSecListComponent;
}(_react2.default.Component);

SchoolSecListComponent.displayName = 'SchoolSchoolSecListComponent';

// Uncomment properties you need
// SchoolSecListComponent.propTypes = {};
// SchoolSecListComponent.defaultProps = {};

exports.default = SchoolSecListComponent;

//# sourceMappingURL=SchoolSecListComponent-compiled.js.map