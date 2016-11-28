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
      history_list: [],
      info: []
    };
    return _this;
  }

  _createClass(PriceDetailComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var d, s;
      d = new Date();
      s = "2016-"; //取年份
      s = s + (d.getMonth() + 1) + "-"; //取月份
      s += d.getDate() + " "; //取日期
      s += d.getHours() + ":"; //取小时
      s += d.getMinutes() + ":"; //取分
      s += d.getSeconds(); //取秒
      console.log(s);
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/data/get_contract/?begin=20161125093000&end=20161125150000&contract=" + this.props.params.name
      }).done(function (data) {
        _jquery2.default.ajax({
          method: "GET",
          url: "http://121.201.68.143/data/get_line/?contract=" + self.props.params.name
        }).done(function (data_line) {
          console.log(data_line);
          for (var i = 0; i < data.length; i++) {
            var list = self.state.history_list;
            var item = [];
            item[1] = data[i].price;
            item[0] = data[i].num;
            list.push(item);
            self.setState({
              history_list: list
            });
          }
          var line_arr = data_line.split(",");
          console.log(line_arr);
          var l2 = parseInt(line_arr[0]);
          var l3 = parseInt(line_arr[1]);
          var l1 = l2 + 25;
          var l4 = l3 - 25;
          var len = self.state.history_list.length;
          var myChart = echarts.init(document.getElementById('main'));
          myChart.setOption({
            grid: {
              left: 40
            },
            tooltip: {},
            xAxis: {
              type: 'value',
              axisLabel: {
                show: false
              },
              min: 0,
              max: 'dataMax'
            },
            yAxis: {
              type: 'value',
              scale: 'false'
            },
            series: [{
              name: '历史走势',
              type: 'line',
              data: self.state.history_list,
              sampling: 'average',
              symbol: 'none'
            }, {
              name: '1',
              type: 'line',
              data: [[0, l2], [len, l2]]

            }, {
              name: '2',
              type: 'line',
              data: [[0, l3], [len, l3]]
            }, {
              name: '3',
              type: 'line',
              data: [[0, l1], [len, l1]],
              symbol: 'none',
              lineStyle: {
                normal: {
                  type: 'dotted'
                }
              }
            }, {
              name: '4',
              type: 'line',
              data: [[0, l4], [len, l4]],
              symbol: 'none',
              lineStyle: {
                normal: {
                  type: 'dotted'
                }
              }
            }]
          });
        });
      });

      _jquery2.default.ajax({
        method: "GET",
        url: 'http://121.201.68.143/data/get_instant/?contract=' + this.props.params.name
      }).done(function (data) {
        data = JSON.parse(data);
        console.log(data.Data[0][0]);
        self.setState({
          info: data.Data[0][0]
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
          'table',
          { className: 'record-table-2' },
          _react2.default.createElement(
            'tr',
            { className: 'table-row-2' },
            _react2.default.createElement(
              'th',
              null,
              '\u5408\u7EA6'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u9AD8'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u4F4E'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u5F00'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u6700\u65B0'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u91CF'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u989D'
            )
          ),
          _react2.default.createElement(
            'tr',
            { className: 'detail-tr' },
            _react2.default.createElement(
              'td',
              null,
              this.state.info[0]
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[2] / 1000
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[4] / 1000
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[3] / 1000
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[1] / 1000
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[5]
            ),
            _react2.default.createElement(
              'td',
              null,
              this.state.info[7]
            )
          )
        ),
        _react2.default.createElement('div', { id: 'main' }),
        _react2.default.createElement(
          'p',
          { className: 'time-1' },
          '9:30'
        ),
        _react2.default.createElement(
          'p',
          { className: 'time-2' },
          '11:30'
        ),
        _react2.default.createElement(
          'p',
          { className: 'time-3' },
          '15:00'
        ),
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