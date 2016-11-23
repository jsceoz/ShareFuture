'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Table = require('material-ui/Table');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var echarts = require('echarts');
require('styles/price/PriceDetail.css');

var PriceDetailComponent = function (_React$Component) {
  _inherits(PriceDetailComponent, _React$Component);

  function PriceDetailComponent(props) {
    _classCallCheck(this, PriceDetailComponent);

    var _this = _possibleConstructorReturn(this, (PriceDetailComponent.__proto__ || Object.getPrototypeOf(PriceDetailComponent)).call(this, props));

    _this.state = {
      history_list: []
    };
    return _this;
  }

  _createClass(PriceDetailComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/data/get_contract/?begin=20161118103543&end=20161118120000&contract=" + this.props.params.name
      }).done(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var list = self.state.history_list;
          var item = [];
          item[1] = data[i].price;
          item[0] = data[i].time;
          list.push(item);
          self.setState({
            history_list: list
          });
        }
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          tooltip: {},
          xAxis: {
            type: 'time',
            boundaryGap: ['20%', '20%']
          },
          yAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax'
          },
          series: [{
            name: '历史走势',
            type: 'line',
            data: self.state.history_list,
            sampling: 'average',
            symbol: 'none'
          }]
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'pricedetail-component' },
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
                '\u9AD8'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u4F4E'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u5F00'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u6362'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u91CF'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                null,
                '\u989D'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            { displayRowCheckbox: false },
            _react2.default.createElement(
              _Table.TableRow,
              null,
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                'IF1611'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              ),
              _react2.default.createElement(
                _Table.TableRowColumn,
                null,
                '0'
              )
            )
          )
        ),
        _react2.default.createElement('div', { id: 'main' }),
        _react2.default.createElement(_FlatButton2.default, {
          label: '\u4EA4\u6613',
          primary: true,
          onClick: function onClick() {
            return window.location.href = "#/deal/" + _this2.props.params.name;
          }
        }),
        _react2.default.createElement(_FooterComponent2.default, { index: 2 })
      );
    }
  }]);

  return PriceDetailComponent;
}(_react2.default.Component);

PriceDetailComponent.displayName = 'PricePriceDetailComponent';

// Uncomment properties you need
// PriceDetailComponent.propTypes = {};
// PriceDetailComponent.defaultProps = {};

exports.default = PriceDetailComponent;

//# sourceMappingURL=PriceDetailComponent-compiled.js.map