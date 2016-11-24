'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Footer from '../public/FooterComponent'
import $ from 'jquery'

require('styles/account/RecordPage.css');

class RecordPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"POST",
      url:"http://121.201.68.143/account/get_finished_deal/",
      data:{
        token:$("#app").attr("data-token"),
        username:$("#app").attr("data-username")
      }
    }).done(function (data) {
      console.log(data);
      self.setState({
        list:data
      })
    })
  }



  render() {
    return (
      <div className="recordpage-component">
        <AppBar
          title="成交记录"
          showMenuIconButton={false}
        />
       <table className="record-table">
         <tr className="table-row">
          <th>时间</th>
          <th>合约</th>
          <th>动态</th>
          <th>数量</th>
          <th>均价</th>
         </tr>
         <tr>
           <td>7/4 11:04</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>11</td>
           <td>3168.2</td>
         </tr>
         <tr>
           <td>7/4 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>11</td>
           <td>3164.2</td>
         </tr>
       </table>
        <Footer index={3}/>
      </div>
    );
  }
}

RecordPageComponent.displayName = 'AccountRecordPageComponent';

// Uncomment properties you need
// RecordPageComponent.propTypes = {};
// RecordPageComponent.defaultProps = {};

export default RecordPageComponent;
