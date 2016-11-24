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
           <td>07/04 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>11</td>
           <td>3164.2</td>
         </tr>
         <tr>
           <td>07/04 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>22</td>
           <td>3164.2</td>
         </tr>
         <tr>
           <td>07/04 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>20</td>
           <td>3164.2</td>
         </tr>
         <tr>
           <td>07/04 11:04</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>11</td>
           <td>3168.2</td>
         </tr>
         <tr>
           <td>07/04 11:04</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>22</td>
           <td>3168.2</td>
         </tr>
         <tr>
           <td>07/04 11:04</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>20</td>
           <td>3168.2</td>
         </tr>
         <tr>
           <td>06/27 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>21</td>
           <td>3076.0</td>
         </tr>
         <tr>
           <td>06/27 14:17</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>21</td>
           <td>3075.0</td>
         </tr>
         <tr>
           <td>06/24 13:34</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>12</td>
           <td>3023.4</td>
         </tr>
         <tr>
           <td>06/24 13:33</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>28</td>
           <td>3028.6</td>
         </tr>
         <tr>
           <td>06/24 13:32</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>20</td>
           <td>3033.0</td>
         </tr>
         <tr>
           <td>06/24 13:05</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>20</td>
           <td>2993.8</td>
         </tr>
         <tr>
           <td>06/24 13:05</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>12</td>
           <td>2993.8</td>
         </tr>

         <tr>
           <td>06/20 10:10</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>23</td>
           <td>3017.0</td>
         </tr>
         <tr>
           <td>06/20 10:10</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>21</td>
           <td>3017.0</td>
         </tr>
         <tr>
           <td>06/20 10:10</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>12</td>
           <td>3017.0</td>
         </tr>
         <tr>
           <td>06/20 10:10</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>12</td>
           <td>3017.0</td>
         </tr>
         <tr>
           <td>06/20 09:49</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>12</td>
           <td>3039.2</td>
         </tr>
         <tr>
           <td>06/20 09:35</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>23</td>
           <td>3045.4</td>
         </tr>
         <tr>
           <td>06/20 09:35</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>21</td>
           <td>3045.4</td>
         </tr>
         <tr>
           <td>06/15 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>22</td>
           <td>3098.4</td>
         </tr>
         <tr>
           <td>06/15 14:59</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>20</td>
           <td>3098.4</td>
         </tr>

         <tr>
           <td>06/15 11:23</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>20</td>
           <td>3116.2</td>
         </tr>
         <tr>
           <td>06/15 11:22</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>22</td>
           <td>3120.2</td>
         </tr>
         <tr>
           <td>05/31 14:51</td>
           <td>IF1606</td>
           <td>买入</td>
           <td>12</td>
           <td>3147.0</td>
         </tr>
         <tr>
           <td>05/31 10:34</td>
           <td>IF1606</td>
           <td>卖出</td>
           <td>12</td>
           <td>3133.4</td>
         </tr>
         <tr>
           <td>04/20 14:59</td>
           <td>IF1607</td>
           <td>卖出</td>
           <td>12</td>
           <td>3119.2</td>
         </tr>
         <tr>
           <td>04/20 14:24</td>
           <td>IF1607</td>
           <td>买入</td>
           <td>12</td>
           <td>3100.8</td>
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
