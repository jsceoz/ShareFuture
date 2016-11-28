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

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/bbs/PostPage.css');

var PostPageComponent = function (_React$Component) {
  _inherits(PostPageComponent, _React$Component);

  function PostPageComponent(props) {
    _classCallCheck(this, PostPageComponent);

    var _this = _possibleConstructorReturn(this, (PostPageComponent.__proto__ || Object.getPrototypeOf(PostPageComponent)).call(this, props));

    _this.state = {
      title: "",
      content: "",
      comment: [],
      commentVal: '发表评论'
    };
    return _this;
  }

  _createClass(PostPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "GET",
        url: "http://121.201.68.143/bbs/showarticle/?id=" + this.props.params.id
      }).done(function (data) {
        console.log(data);
        self.setState({
          title: data.article.title,
          content: data.article.content,
          comment: data.comment
        });
      });
    }
  }, {
    key: 'handleCommentChange',
    value: function handleCommentChange(e) {
      this.setState({
        commentVal: e.target.value
      });
    }
  }, {
    key: 'commentSubmit',
    value: function commentSubmit() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/bbs/addconment/",
        data: {
          articleid: this.props.params.id,
          parentid: 'Null',
          comment: this.state.commentVal,
          username: (0, _jquery2.default)('#app').attr('data-username'),
          token: (0, _jquery2.default)('#app').attr('data-token')
        }
      }).done(function (data) {
        console.log(data);
        _jquery2.default.ajax({
          method: "GET",
          url: "http://121.201.68.143/bbs/showarticle/?id=" + self.props.params.id
        }).done(function (data) {
          console.log(data);
          self.setState({
            title: data.article.title,
            content: data.article.content,
            comment: data.comment
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'postpage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u671F\u8D27\u8BBA\u575B',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'h1',
          { className: 'post-title' },
          this.state.title
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          'p',
          { className: 'post-p' },
          this.state.content
        ),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(
            _Subheader2.default,
            null,
            '\u8BC4\u8BBA'
          ),
          this.state.comment.map(function (item) {
            return _react2.default.createElement(_List.ListItem, {
              primaryText: item.content,
              secondaryText: item.user
            });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'post-comment-text-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            className: 'comment-input',
            hintText: '\u53D1\u8868\u8BC4\u8BBA',
            value: this.state.commentVal,
            onChange: this.handleCommentChange.bind(this)
          }),
          _react2.default.createElement(_FlatButton2.default, {
            className: 'comment-submit-btn',
            label: '\u786E\u5B9A',
            primary: true,
            onClick: this.commentSubmit.bind(this)
          })
        ),
        _react2.default.createElement('div', { className: 'placeholder' }),
        _react2.default.createElement(_FooterComponent2.default, { index: 0 })
      );
    }
  }]);

  return PostPageComponent;
}(_react2.default.Component);

PostPageComponent.displayName = 'BBSPostPageComponent';

// Uncomment properties you need
// PostPageComponent.propTypes = {};
// PostPageComponent.defaultProps = {};

exports.default = PostPageComponent;

//# sourceMappingURL=PostPageComponent-compiled.js.map