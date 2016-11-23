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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>合约</TableHeaderColumn>
              <TableHeaderColumn>数量</TableHeaderColumn>
              <TableHeaderColumn>时间</TableHeaderColumn>
              <TableHeaderColumn>价格</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.list.map((item) => (
              <TableRow>
                <TableRowColumn>{item.contract_name}</TableRowColumn>
                <TableRowColumn>{item.num}</TableRowColumn>
                <TableRowColumn>{item.time}</TableRowColumn>
                <TableRowColumn>{item.expected_price}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
