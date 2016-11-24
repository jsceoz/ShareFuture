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

require('styles/account/RecordPage.css');

var RecordPageComponent = function (_React$Component) {
  _inherits(RecordPageComponent, _React$Component);

  function RecordPageComponent(props) {
    _classCallCheck(this, RecordPageComponent);

    var _this = _possibleConstructorReturn(this, (RecordPageComponent.__proto__ || Object.getPrototypeOf(RecordPageComponent)).call(this, props));

    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(RecordPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/account/get_finished_deal/",
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
        { className: 'recordpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u6210\u4EA4\u8BB0\u5F55',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'table',
          { className: 'record-table' },
          _react2.default.createElement(
            'tr',
            { className: 'table-row' },
            _react2.default.createElement(
              'th',
              null,
              '\u65F6\u95F4'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u5408\u7EA6'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u52A8\u6001'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u6570\u91CF'
            ),
            _react2.default.createElement(
              'th',
              null,
              '\u5747\u4EF7'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '11'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3164.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '22'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3164.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3164.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 11:04'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '11'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3168.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 11:04'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '22'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3168.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '07/04 11:04'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3168.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/27 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '21'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3076.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/27 14:17'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '21'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3075.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/24 13:34'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3023.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/24 13:33'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '28'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3028.6'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/24 13:32'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3033.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/24 13:05'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '2993.8'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/24 13:05'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '2993.8'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 10:10'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '23'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3017.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 10:10'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '21'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3017.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 10:10'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3017.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 10:10'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3017.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 09:49'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3039.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 09:35'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '23'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3045.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/20 09:35'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '21'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3045.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/15 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '22'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3098.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/15 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3098.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/15 11:23'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '20'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3116.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '06/15 11:22'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '22'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3120.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '05/31 14:51'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1606'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3147.0'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '05/31 10:34'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1606'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3133.4'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '04/20 14:59'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u5356\u51FA'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3119.2'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              '04/20 14:24'
            ),
            _react2.default.createElement(
              'td',
              null,
              'IF1607'
            ),
            _react2.default.createElement(
              'td',
              null,
              '\u4E70\u5165'
            ),
            _react2.default.createElement(
              'td',
              null,
              '12'
            ),
            _react2.default.createElement(
              'td',
              null,
              '3100.8'
            )
          )
        ),
        _react2.default.createElement(_FooterComponent2.default, { index: 3 })
      );
    }
  }]);

  return RecordPageComponent;
}(_react2.default.Component);

RecordPageComponent.displayName = 'AccountRecordPageComponent';

// Uncomment properties you need
// RecordPageComponent.propTypes = {};
// RecordPageComponent.defaultProps = {};

exports.default = RecordPageComponent;

//# sourceMappingURL=RecordPageComponent-compiled.js.map