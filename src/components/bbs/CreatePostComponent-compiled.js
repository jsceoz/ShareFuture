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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/bbs/CreatePost.css');

var CreatePostComponent = function (_React$Component) {
  _inherits(CreatePostComponent, _React$Component);

  function CreatePostComponent(props) {
    _classCallCheck(this, CreatePostComponent);

    var _this = _possibleConstructorReturn(this, (CreatePostComponent.__proto__ || Object.getPrototypeOf(CreatePostComponent)).call(this, props));

    _this.state = {
      title: '',
      content: ''
    };
    return _this;
  }

  _createClass(CreatePostComponent, [{
    key: 'handleTitleChange',
    value: function handleTitleChange(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: 'handleContentChange',
    value: function handleContentChange(e) {
      this.setState({
        content: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      _jquery2.default.ajax({
        method: "POST",
        url: 'http://121.201.68.143/bbs/addarticle/',
        data: {
          title: this.state.title,
          content: this.state.content,
          category: '技巧分析',
          token: (0, _jquery2.default)('#app').attr('data-token'),
          username: (0, _jquery2.default)('#app').attr('data-username')
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'createpost-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u53D1\u5E16',
          showMenuIconButton: false
        }),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 }),
        _react2.default.createElement(
          'div',
          { className: 'post-input-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            hintText: '\u6807\u9898',
            floatingLabelText: '\u6807\u9898',
            onChange: this.handleTitleChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            hintText: '\u5E16\u5B50\u5185\u5BB9',
            floatingLabelText: '\u53D1\u8868\u65B0\u5E16',
            multiLine: true,
            rows: 2,
            onChange: this.handleContentChange.bind(this)
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            className: 'create-post-btn',
            label: '\u53D1\u8868',
            primary: true,
            fullWidth: true,
            onClick: this.handleSubmit.bind(this)
          })
        )
      );
    }
  }]);

  return CreatePostComponent;
}(_react2.default.Component);

CreatePostComponent.displayName = 'BBSCreatePostComponent';

// Uncomment properties you need
// CreatePostComponent.propTypes = {};
// CreatePostComponent.defaultProps = {};

exports.default = CreatePostComponent;

//# sourceMappingURL=CreatePostComponent-compiled.js.map