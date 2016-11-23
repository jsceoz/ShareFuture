'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactRouter = require('react-router');

var _HomePageComponent = require('./home/HomePageComponent');

var _HomePageComponent2 = _interopRequireDefault(_HomePageComponent);

var _NewsPageComponent = require('./news/NewsPageComponent');

var _NewsPageComponent2 = _interopRequireDefault(_NewsPageComponent);

var _NewsDetailComponent = require('./news/NewsDetailComponent');

var _NewsDetailComponent2 = _interopRequireDefault(_NewsDetailComponent);

var _AccountPageComponent = require('./account/AccountPageComponent');

var _AccountPageComponent2 = _interopRequireDefault(_AccountPageComponent);

var _SchoolListPageComponent = require('./school/SchoolListPageComponent');

var _SchoolListPageComponent2 = _interopRequireDefault(_SchoolListPageComponent);

var _SchoolSecListComponent = require('./school/SchoolSecListComponent');

var _SchoolSecListComponent2 = _interopRequireDefault(_SchoolSecListComponent);

var _SchoolDetailComponent = require('./school/SchoolDetailComponent');

var _SchoolDetailComponent2 = _interopRequireDefault(_SchoolDetailComponent);

var _BbslistPageComponent = require('./bbs/BbslistPageComponent');

var _BbslistPageComponent2 = _interopRequireDefault(_BbslistPageComponent);

var _PostPageComponent = require('./bbs/PostPageComponent');

var _PostPageComponent2 = _interopRequireDefault(_PostPageComponent);

var _LoginBoxComponent = require('./login/LoginBoxComponent');

var _LoginBoxComponent2 = _interopRequireDefault(_LoginBoxComponent);

var _PricePageComponent = require('./price/PricePageComponent');

var _PricePageComponent2 = _interopRequireDefault(_PricePageComponent);

var _PriceDetailComponent = require('./price/PriceDetailComponent');

var _PriceDetailComponent2 = _interopRequireDefault(_PriceDetailComponent);

var _CancelPageComponent = require('./account/CancelPageComponent');

var _CancelPageComponent2 = _interopRequireDefault(_CancelPageComponent);

var _RecordPageComponent = require('./account/RecordPageComponent');

var _RecordPageComponent2 = _interopRequireDefault(_RecordPageComponent);

var _ResetPageComponent = require('./account/ResetPageComponent');

var _ResetPageComponent2 = _interopRequireDefault(_ResetPageComponent);

var _DealComponent = require('./price/DealComponent');

var _DealComponent2 = _interopRequireDefault(_DealComponent);

var _SettingComponent = require('./account/SettingComponent');

var _SettingComponent2 = _interopRequireDefault(_SettingComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('normalize.css/normalize.css');
require('styles/App.css');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'index' },
          _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.hashHistory },
            _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomePageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginBoxComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/news', component: _NewsPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/news/detail/:id', component: _NewsDetailComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/account', component: _AccountPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/school', component: _SchoolListPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/school/list/:category', component: _SchoolSecListComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/school/detail/:id', component: _SchoolDetailComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/bbs', component: _BbslistPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/bbs/detail/:id', component: _PostPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/price', component: _PricePageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/price-detail/:name', component: _PriceDetailComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/cancel', component: _CancelPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/analysis', component: _AccountPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/record', component: _RecordPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/reset', component: _ResetPageComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/deal/:name', component: _DealComponent2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/setting', component: _SettingComponent2.default })
          )
        )
      );
    }
  }]);

  return AppComponent;
}(_react2.default.Component);

AppComponent.defaultProps = {};

exports.default = AppComponent;

//# sourceMappingURL=Main-compiled.js.map