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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _lineWeight = require('material-ui/svg-icons/action/line-weight');

var _lineWeight2 = _interopRequireDefault(_lineWeight);

var _description = require('material-ui/svg-icons/action/description');

var _description2 = _interopRequireDefault(_description);

var _settingsBackupRestore = require('material-ui/svg-icons/action/settings-backup-restore');

var _settingsBackupRestore2 = _interopRequireDefault(_settingsBackupRestore);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/account/AccountPage.css');

var AccountPageComponent = function (_React$Component) {
  _inherits(AccountPageComponent, _React$Component);

  function AccountPageComponent(props) {
    _classCallCheck(this, AccountPageComponent);

    var _this = _possibleConstructorReturn(this, (AccountPageComponent.__proto__ || Object.getPrototypeOf(AccountPageComponent)).call(this, props));

    _this.state = {
      info: {
        available_money: 0,
        available_money_ratio: 0,
        floating_balance: 0,
        realized_balance: 0,
        today_balance: 0,
        total_money: 0
      },
      open: false
    };
    return _this;
  }

  _createClass(AccountPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;

      _jquery2.default.ajax({
        method: 'POST',
        url: 'http://121.201.68.143/account/get_account_money/',
        data: {
          token: (0, _jquery2.default)('#app').attr('data-token'),
          username: (0, _jquery2.default)('#app').attr('data-username')
        }
      }).done(function (data) {
        var data_obj = JSON.parse(data);
        console.log(data_obj);
        self.setState({
          info: data_obj
        });
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState({
        open: true
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'accountpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u8D26\u6237',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          _Paper2.default,
          { className: 'account-header-info-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'account-header-list' },
            _react2.default.createElement(
              'li',
              null,
              '\u603B\u8D44\u4EA7',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[0]
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u53EF\u7528\u4FDD\u8BC1\u91D1',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[1]
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u53EF\u7528\u4FDD\u8BC1\u91D1\u6BD4\u7387',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[2]
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'account-header-list' },
            _react2.default.createElement(
              'li',
              null,
              '\u5F53\u65E5\u76C8\u4E8F',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[3]
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u5B9E\u73B0\u76C8\u4E8F',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[4]
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u6D6E\u52A8\u76C8\u4E8F',
              _react2.default.createElement(
                'p',
                null,
                this.state.info[5]
              )
            )
          )
        ),
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-menu' },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_MenuItem2.default, { primaryText: '\u59D4\u6258/\u64A4\u5355', leftIcon: _react2.default.createElement(_delete2.default, null), onClick: function onClick() {
                return window.location.href = '#/cancel/';
              } }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_MenuItem2.default, { primaryText: '\u6210\u4EA4\u8BB0\u5F55', leftIcon: _react2.default.createElement(_lineWeight2.default, null), onClick: function onClick() {
                return window.location.href = '#/record/';
              } }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_MenuItem2.default, { primaryText: '\u8D44\u4EA7\u5206\u6790', leftIcon: _react2.default.createElement(_description2.default, null), onClick: function onClick() {
                return window.location.href = '#/analysis/';
              } }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_MenuItem2.default, { primaryText: '\u8D26\u6237\u91CD\u7F6E', leftIcon: _react2.default.createElement(_settingsBackupRestore2.default, null), onClick: this.handleReset.bind(this) })
          )
        ),
        _react2.default.createElement(_Snackbar2.default, {
          open: this.state.open,
          message: '\u8D26\u6237\u91CD\u7F6E\u6210\u529F',
          autoHideDuration: 1000,
          onRequestClose: this.handleRequestClose.bind(this)
        }),
        _react2.default.createElement(_FooterComponent2.default, { index: 3 })
      );
    }
  }]);

  return AccountPageComponent;
}(_react2.default.Component);

AccountPageComponent.displayName = 'AccountAccountPageComponent';

// Uncomment properties you need
// AccountPageComponent.propTypes = {};
// AccountPageComponent.defaultProps = {};

exports.default = AccountPageComponent;

//# sourceMappingURL=AccountPageComponent-compiled.js.map