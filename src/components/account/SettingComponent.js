'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Footer from '../public/FooterComponent'
import $ from 'jquery'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/done';
import Snackbar from 'material-ui/Snackbar';

require('styles/account/Setting.css');

class SettingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proba_rad:'',
      proba_norm:'',
      proba_defe:'',
      rate_rad:'',
      rate_norm:'',
      exp_low_value:'',
      exp_max_value:'',
      open:false,
      msg:'参数设置已完成'
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/risk/get_settings/",
      data:{
        token:$("#app").attr("data-token"),
        username:$("#app").attr("data-username")
      }
    }).done(function (data) {
      data = JSON.parse(data);
      console.log(data);
      self.setState({
        proba_rad:data.proba_rad,
        proba_norm:data.proba_norm,
        proba_defe:data.proba_defe,
        rate_rad:data.rate_rad,
        rate_norm:data.rate_norm,
        exp_low_value:data.exp_low_value,
        exp_max_value:data.exp_max_value
      })
    })
  }


  handleproba_radChange(e) {
    this.setState({
      proba_rad:e.target.value
    })
  }

  handleproba_normChange(e) {
    this.setState({
      proba_norm:e.target.value
    })
  }

  handleproba_defeChange(e) {
    this.setState({
      proba_defe:e.target.value
    })
  }

  handlerate_radChange(e) {
    this.setState({
      rate_rad:e.target.value
    })
  }

  handlerate_normChange(e) {
    this.setState({
      rate_norm:e.target.value
    })
  }

  handleexp_low_valueChange(e) {
    this.setState({
      exp_low_value:e.target.value
    })
  }

  handleexp_max_valueChange(e) {
    this.setState({
      exp_max_value:e.target.value
    })
  }

  handleSubmit() {
    let self = this;
    // $.ajax({
    //   method:"POST",
    //   url:"http://121.201.68.143/risk/set_settings/",
    //   data:{
    //     token:$("#app").attr("data-token"),
    //     username:$("#app").attr("data-username"),
    //     info:this.state
    //   }
    // }).done(function (data) {
    //   console.log(data);
    //   self.setState({
    //     open:true
    //   })
    // })
    self.setState({
      open:true
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="setting-component">
        <AppBar
          title="设置"
          showMenuIconButton={false}
        />
        <div className="setting-text-wrapper">
        <TextField
          floatingLabelText="进攻型资金概率区间"
          value={this.state.proba_rad}
          onChange={this.handleproba_radChange.bind(this)}
        />
        <TextField
          floatingLabelText="普通型资金概率区间"
          value={this.state.proba_norm}
          onChange={this.handleproba_normChange.bind(this)}
        />
        <TextField
          floatingLabelText="防守型资金概率区间"
          value={this.state.proba_defe}
          onChange={this.handleproba_defeChange.bind(this)}
        />
        <TextField
          floatingLabelText="进攻型资金占总资金比重"
          value={this.state.rate_rad}
          onChange={this.handlerate_radChange.bind(this)}
        />
        <TextField
          floatingLabelText="普通型资金占总资金比重"
          value={this.state.rate_norm}
          onChange={this.handlerate_normChange.bind(this)}
        />
        <TextField
          floatingLabelText="用户最小期望收益"
          value={this.state.exp_low_value}
          onChange={this.handleexp_low_valueChange.bind(this)}
        />
        <TextField
          floatingLabelText="用户单笔承受最大损失"
          value={this.state.exp_max_value}
          onChange={this.handleexp_max_valueChange.bind(this)}
        />
        </div>
        <FloatingActionButton
          className="setting-submit-btn"
          onClick={this.handleSubmit.bind(this)}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Snackbar
          open={this.state.open}
          message={this.state.msg}
          autoHideDuration={1000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
        <div className="placeholder"></div>
        <Footer index={3}/>
      </div>
    );
  }
}

SettingComponent.displayName = 'AccountSettingComponent';

// Uncomment properties you need
// SettingComponent.propTypes = {};
// SettingComponent.defaultProps = {};

export default SettingComponent;
