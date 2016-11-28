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
      history_list:[],
      info:[]
    }
  }

  componentDidMount() {
    var d,s;
    d = new Date();
    s = "2016-";             //取年份
    s = s + (d.getMonth() + 1) + "-";//取月份
    s += d.getDate() + " ";         //取日期
    s += d.getHours() + ":";       //取小时
    s += d.getMinutes() + ":";    //取分
    s += d.getSeconds();         //取秒
    console.log(s);
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/data/get_contract/?begin=20161125093000&end=20161125150000&contract="+this.props.params.name,
    }).done(function (data) {
      $.ajax({
        method:"GET",
        url:"http://121.201.68.143/data/get_line/?contract="+self.props.params.name
      }).done(function (data_line) {
        console.log(data_line);
        for (let i = 0; i < data.length; i++){
          let list = self.state.history_list;
          let item = [];
          item[1] = data[i].price;
          item[0] = data[i].num;
          list.push(item);
          self.setState({
            history_list:list
          })
        }
        let line_arr = data_line.split(",");
        console.log(line_arr);
        let l2 = parseInt(line_arr[0]);
        let l3 = parseInt(line_arr[1]);
        let l1 = l2+25;
        let l4 = l3-25;
        let len = self.state.history_list.length;
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          grid:{
            left:40
          },
          tooltip: {},
          xAxis: {
            type: 'value',
            axisLabel: {
              show:false
            },
            min:0,
            max:'dataMax'
          },
          yAxis: {
            type: 'value',
            scale:'false'
          },
          series: [{
            name: '历史走势',
            type: 'line',
            data:self.state.history_list,
            sampling: 'average',
            symbol: 'none'
          },
            {
              name: '1',
              type: 'line',
              data: [[0,l2], [len,l2]]

            },
            {
              name: '2',
              type: 'line',
              data: [[0,l3], [len,l3]]
            },
            {
              name: '3',
              type: 'line',
              data: [[0,l1], [len,l1]],
              symbol: 'none',
              lineStyle:{
                normal:{
                  type:'dotted'
                }
              }
            },
            {
              name: '4',
              type: 'line',
              data: [[0,l4], [len,l4]],
              symbol: 'none',
              lineStyle:{
                normal:{
                  type:'dotted'
                }
              }
            },
          ]
        });
      });
      });


    $.ajax({
      method:"GET",
      url:'http://121.201.68.143/data/get_instant/?contract='+this.props.params.name
    }).done(function (data) {
      data = JSON.parse(data);
      console.log(data.Data[0][0]);
      self.setState({
        info:data.Data[0][0]
      })
    })

  }


  render() {
    return (
      <div className="pricedetail-component">
        <AppBar
          title="行情"
          showMenuIconButton={false}
        />
        <table className="record-table-2">
            <tr className="table-row-2">
              <th>合约</th>
              <th>高</th>
              <th>低</th>
              <th>开</th>
              <th>最新</th>
              <th>量</th>
              <th>额</th>
            </tr>
              <tr className="detail-tr">
                <td>{this.state.info[0]}</td>
                <td>{this.state.info[2]/1000}</td>
                <td>{this.state.info[4]/1000}</td>
                <td>{this.state.info[3]/1000}</td>
                <td>{this.state.info[1]/1000}</td>
                <td>{this.state.info[5]}</td>
                <td>{this.state.info[7]}</td>
              </tr>
        </table>
        <div id="main"></div>
        <p className="time-1">9:30</p>
        <p className="time-2">11:30</p>
        <p className="time-3">15:00</p>
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
