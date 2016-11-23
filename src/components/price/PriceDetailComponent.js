'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Footer from '../public/FooterComponent'
import $ from 'jquery'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

var echarts = require('echarts');
require('styles/price/PriceDetail.css');

class PriceDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history_list:[]
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/data/get_contract/?begin=20161118103543&end=20161118120000&contract="+this.props.params.name,
    }).done(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++){
        let list = self.state.history_list;
        let item = [];
        item[1] = data[i].price;
        item[0] = data[i].time;
        list.push(item);
        self.setState({
          history_list:list
        })
      }
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        tooltip: {},
        xAxis: {
          type: 'time',
          boundaryGap: ['20%', '20%']
        },
        yAxis: {
          type: 'value',
          min: 'dataMin',
          max: 'dataMax'
        },
        series: [{
          name: '历史走势',
          type: 'line',
          data:self.state.history_list,
          sampling: 'average',
          symbol: 'none'
        }]
      });
    });

  }


  render() {
    return (
      <div className="pricedetail-component">
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
              <TableHeaderColumn>高</TableHeaderColumn>
              <TableHeaderColumn>低</TableHeaderColumn>
              <TableHeaderColumn>开</TableHeaderColumn>
              <TableHeaderColumn>换</TableHeaderColumn>
              <TableHeaderColumn>量</TableHeaderColumn>
              <TableHeaderColumn>额</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>IF1611</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
                <TableRowColumn>0</TableRowColumn>
              </TableRow>
          </TableBody>
        </Table>
        <div id="main"></div>
        <FlatButton
          label="交易"
          primary={true}
          onClick={() => window.location.href="#/deal/"+this.props.params.name}
        />
        <Footer index={2}/>
      </div>

    );
  }
}

PriceDetailComponent.displayName = 'PricePriceDetailComponent';

// Uncomment properties you need
// PriceDetailComponent.propTypes = {};
// PriceDetailComponent.defaultProps = {};

export default PriceDetailComponent;
