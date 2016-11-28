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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/price/PricePage.css');

var PricePageComponent = function (_React$Component) {
  _inherits(PricePageComponent, _React$Component);

  function PricePageComponent(props) {
    _classCallCheck(this, PricePageComponent);

    var _this = _possibleConstructorReturn(this, (PricePageComponent.__proto__ || Object.getPrototypeOf(PricePageComponent)).call(this, props));

    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(PricePageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var getList = ['IF1612', 'IF1701', 'IF1703', 'IF1706', 'IH1612', 'IH1701', 'IH1703', 'IH1706', 'IC1612', 'IC1701', 'IC1703', 'IC1706'];
      for (var i = 0; i < getList.length; i++) {
        _jquery2.default.ajax({
          method: "GET",
          url: "http://121.201.68.143/data/get_instant/?contract=" + getList[i]
        }).done(function (data) {
          data = JSON.parse(data);
          console.log(data.Data[0][0]);
          var oldList = self.state.list;
          oldList.push(data.Data[0][0]);
          self.setState({
            list: oldList
          });
        });
      }
    }
  }, {
    key: 'handleClickRow',
    value: function handleClickRow() {
      alert('dss');
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        'div',
        { className: 'pricepage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u884C\u60C5',
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
                '\u6700\u65B0\u4EF7'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u6DA8\u8DCC'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u6DA8\u8DCC\u5E45'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            { displayRowCheckbox: false },
            this.state.list.map(function (item) {
              return _react2.default.createElement(
                'div',
                { className: 'price-row', onClick: function onClick() {
                    return window.location.href = "#/price-detail/" + item[0];
                  } },
                _react2.default.createElement(
                  'a',
                  { className: 'p-a-1' },
                  item[0]
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'p-a-2' },
                  item[1] / 1000
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'p-a-3' },
                  item[8] / 1000
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'p-a-4' },
                  item[9] / 1000
                )
              );
            })
          )
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 2 })
      );
    }
  }]);

  return PricePageComponent;
}(_react2.default.Component);

PricePageComponent.displayName = 'PricePricePageComponent';

// Uncomment properties you need
// PricePageComponent.propTypes = {};
// PricePageComponent.defaultProps = {};

exports.default = PricePageComponent;

//# sourceMappingURL=PricePageComponent-compiled.js.map