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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _RadioButton = require('material-ui/RadioButton');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/price/Deal.css');

var DealComponent = function (_React$Component) {
  _inherits(DealComponent, _React$Component);

  function DealComponent(props) {
    _classCallCheck(this, DealComponent);

    var _this = _possibleConstructorReturn(this, (DealComponent.__proto__ || Object.getPrototypeOf(DealComponent)).call(this, props));

    _this.state = {
      contract: "",
      price: "",
      num: ''
    };
    return _this;
  }

  _createClass(DealComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        contract: this.props.params.name
      });
    }
  }, {
    key: 'handleOpenBuy',
    value: function handleOpenBuy() {
      var self = this;
      console.log(this.state);
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/open_buy/",
        data: {
          username: (0, _jquery2.default)("#app").attr("data-username"),
          token: (0, _jquery2.default)("#app").attr("data-token"),
          contract: this.state.contract,
          price: this.state.price,
          number: this.state.number
        }
      }).done(function (data) {
        console.log(data);
      });
    }
  }, {
    key: 'handleOpenSell',
    value: function handleOpenSell() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/open_sell/",
        data: {
          username: (0, _jquery2.default)("#app").attr("data-username"),
          token: (0, _jquery2.default)("#app").attr("data-token"),
          contract: this.state.contract,
          price: this.state.price,
          number: this.state.num
        }
      }).done(function (data) {
        console.log(data);
      });
    }
  }, {
    key: 'handleCloseBuy',
    value: function handleCloseBuy() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/close_buy/",
        data: {
          username: (0, _jquery2.default)("#app").attr("data-username"),
          token: (0, _jquery2.default)("#app").attr("data-token"),
          contract: this.state.contract,
          price: this.state.price,
          number: this.state.num
        }
      }).done(function (data) {
        console.log(data);
      });
    }
  }, {
    key: 'handleCloseSell',
    value: function handleCloseSell() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/close_sell/",
        data: {
          username: (0, _jquery2.default)("#app").attr("data-username"),
          token: (0, _jquery2.default)("#app").attr("data-token"),
          contract: this.state.contract,
          price: this.state.price,
          number: this.state.num
        }
      }).done(function (data) {
        console.log(data);
      });
    }
  }, {
    key: 'handlePriceChange',
    value: function handlePriceChange(e) {
      this.setState({
        price: e.target.value
      });
    }
  }, {
    key: 'handleNumChange',
    value: function handleNumChange(e) {
      this.setState({
        num: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'deal-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u4EA4\u6613',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'div',
          { className: 'deal-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            hintText: '\u5408\u7EA6',
            value: this.props.params.name
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_TextField2.default, {
            hintText: '\u4EF7\u683C',
            onChange: this.handlePriceChange.bind(this)
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_TextField2.default, {
            hintText: '\u6570\u91CF',
            onChange: this.handleNumChange.bind(this)
          })
        ),
        _react2.default.createElement(_RaisedButton2.default, {
          className: 'deal-submit-btn',
          label: '\u4E70\u5165\u5F00\u4ED3',
          primary: true,
          onClick: this.handleOpenBuy.bind(this)
        }),
        _react2.default.createElement(_RaisedButton2.default, {
          className: 'deal-submit-btn',
          label: '\u5356\u51FA\u5F00\u4ED3',
          primary: true,
          onClick: this.handleOpenSell.bind(this)
        }),
        _react2.default.createElement(_RaisedButton2.default, {
          className: 'deal-submit-btn',
          label: '\u4E70\u5165\u5E73\u4ED3',
          primary: true,
          onClick: this.handleCloseBuy.bind(this)
        }),
        _react2.default.createElement(_RaisedButton2.default, {
          className: 'deal-submit-btn',
          label: '\u5356\u51FA\u5E73\u4ED3',
          primary: true,
          onClick: this.handleCloseSell.bind(this)
        }),
        _react2.default.createElement(_FooterComponent2.default, { index: 2 })
      );
    }
  }]);

  return DealComponent;
}(_react2.default.Component);

DealComponent.displayName = 'PriceDealComponent';

// Uncomment properties you need
// DealComponent.propTypes = {};
// DealComponent.defaultProps = {};

exports.default = DealComponent;

//# sourceMappingURL=DealComponent-compiled.js.map