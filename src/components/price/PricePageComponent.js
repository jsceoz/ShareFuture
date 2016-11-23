'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import $ from 'jquery'
import Footer from '../public/FooterComponent'

require('styles/price/PricePage.css');

class PricePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[['IF1611', 3427400, 1400, 4],['IH1611', 3427400, 1400, 4]]
    }
  }

  componentDidMount() {
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/data/get_instant/?contract=IF1611",
    }).done(function (data) {
      console.log(data[0]);
      data.replace('D', '');
      console.log(data)
    })
  }

  handleClickRow() {
    alert('dss')
  }

  render() {
    let self = this;
    return (
      <div className="pricepage-component">
        <AppBar
          title="行情"
          showMenuIconButton={false}
        />
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>合约</TableHeaderColumn>
              <TableHeaderColumn>最新价</TableHeaderColumn>
              <TableHeaderColumn>涨跌</TableHeaderColumn>
              <TableHeaderColumn>涨跌幅</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.list.map((item) => (
              <div className="price-row" onClick={() => window.location.href="#/price-detail/"+item[0]}>
                <a>{item[0]}</a>
                <a>{item[1]/1000}</a>
                <a>{item[2]/1000}</a>
                <a>{item[3]/1000}</a>
              </div>
            ))}
          </TableBody>
        </Table>
        <Footer index={2}/>
      </div>
    );
  }
}

PricePageComponent.displayName = 'PricePricePageComponent';

// Uncomment properties you need
// PricePageComponent.propTypes = {};
// PricePageComponent.defaultProps = {};

export default PricePageComponent;
