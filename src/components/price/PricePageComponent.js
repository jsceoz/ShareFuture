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
      list:[]
    }
  }

  componentDidMount() {
    let self = this;
    let getList = ['IF1612', 'IF1701', 'IF1703', 'IF1706', 'IH1612', 'IH1701', 'IH1703', 'IH1706', 'IC1612', 'IC1701', 'IC1703', 'IC1706'];
    for (let i = 0; i < getList.length; i++){
      $.ajax({
        method:"GET",
        url:"http://121.201.68.143/data/get_instant/?contract="+getList[i],
      }).done(function (data) {
        data = JSON.parse(data);
        console.log(data.Data[0][0]);
        let oldList = self.state.list;
        oldList.push(data.Data[0][0]);
        self.setState({
          list:oldList
        })
      })
    }
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
                <a className="p-a-1">{item[0]}</a>
                <a className="p-a-2">{item[1]/1000}</a>
                <a className="p-a-3">{item[8]/1000}</a>
                <a className="p-a-4">{item[9]/1000}</a>
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
