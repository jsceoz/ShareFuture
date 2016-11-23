'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Footer from '../public/FooterComponent'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import $ from 'jquery'

require('styles/price/Deal.css');

class DealComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contract:"",
      price:"",
      num:''
    }
  }

  componentDidMount() {
    this.setState({
      contract: this.props.params.name
    })
  }


  handleOpenBuy() {
    let self = this;
    console.log(this.state);
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/open_buy/",
      data: {
        username:$("#app").attr("data-username"),
        token:$("#app").attr("data-token"),
        contract:this.state.contract,
        price:this.state.price,
        number:this.state.number
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  handleOpenSell() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/open_sell/",
      data: {
        username:$("#app").attr("data-username"),
        token:$("#app").attr("data-token"),
        contract:this.state.contract,
        price:this.state.price,
        number:this.state.num
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  handleCloseBuy() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/close_buy/",
      data: {
        username:$("#app").attr("data-username"),
        token:$("#app").attr("data-token"),
        contract:this.state.contract,
        price:this.state.price,
        number:this.state.num
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  handleCloseSell() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/close_sell/",
      data: {
        username:$("#app").attr("data-username"),
        token:$("#app").attr("data-token"),
        contract:this.state.contract,
        price:this.state.price,
        number:this.state.num
      }
    }).done(function (data) {
      console.log(data)
    })
  }

  handlePriceChange(e) {
    this.setState({
      price:e.target.value
    })
  }

  handleNumChange(e) {
    this.setState({
      num:e.target.value
    })
  }
  render() {
    return (
      <div className="deal-component">
        <AppBar
          title="交易"
          showMenuIconButton={false}
        />
        <div className="deal-wrapper">
        <TextField
          hintText="合约"
          value={this.props.params.name}
        /><br />
        <TextField
          hintText="价格"
          onChange={this.handlePriceChange.bind(this)}
        /><br />
        <TextField
          hintText="数量"
          onChange={this.handleNumChange.bind(this)}
        />
        </div>
        <RaisedButton
          className="deal-submit-btn"
          label="买入开仓"
          primary={true}
          onClick={this.handleOpenBuy.bind(this)}
        />
          <RaisedButton
            className="deal-submit-btn"
            label="卖出开仓"
            primary={true}
            onClick={this.handleOpenSell.bind(this)}
          />
          <RaisedButton
            className="deal-submit-btn"
            label="买入平仓"
            primary={true}
            onClick={this.handleCloseBuy.bind(this)}
          />
          <RaisedButton
            className="deal-submit-btn"
            label="卖出平仓"
            primary={true}
            onClick={this.handleCloseSell.bind(this)}
          />
        <Footer index={2}/>
      </div>
    );
  }
}

DealComponent.displayName = 'PriceDealComponent';

// Uncomment properties you need
// DealComponent.propTypes = {};
// DealComponent.defaultProps = {};

export default DealComponent;
