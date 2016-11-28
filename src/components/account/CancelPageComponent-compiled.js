'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Table = require('material-ui/Table');

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/account/CancelPage.css');

var CancelPageComponent = function (_React$Component) {
  _inherits(CancelPageComponent, _React$Component);

  function CancelPageComponent(props) {
    _classCallCheck(this, CancelPageComponent);

    var _this = _possibleConstructorReturn(this, (CancelPageComponent.__proto__ || Object.getPrototypeOf(CancelPageComponent)).call(this, props));

    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(CancelPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/get_waiting_deal/",
        data: {
          token: (0, _jquery2.default)("#app").attr("data-token"),
          username: (0, _jquery2.default)("#app").attr("data-username")
        }
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
        { className: 'cancelpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u59D4\u6258/\u64A4\u5355',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          _Table.Table,
          null,
          _react2.default.createElement(
            _Table.TableHeader,
            {
              displaySelectAll: false,
              adjustForCheckbox: false
            },
            _react2.default.createElement(
              _Table.TableRow,
              null,
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u5408\u7EA6'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u6570\u91CF'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u65F6\u95F4'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u4EF7\u683C'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            null,
            this.state.list.map(function (item) {
              return _react2.default.createElement(
                _Table.TableRow,
                null,
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  null,
                  item.contract_name
                ),
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  null,
                  item.num
                ),
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  null,
                  item.time
                ),
                _react2.default.createElement(
                  _Table.TableRowColumn,
                  null,
                  item.expected_price
                )
              );
            })
          )
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 3 })
      );
    }
  }]);

  return CancelPageComponent;
}(_react2.default.Component);

CancelPageComponent.displayName = 'AccountCancelPageComponent';

// Uncomment properties you need
// CancelPageComponent.propTypes = {};
// CancelPageComponent.defaultProps = {};

exports.default = CancelPageComponent;

//# sourceMappingURL=CancelPageComponent-compiled.js.map