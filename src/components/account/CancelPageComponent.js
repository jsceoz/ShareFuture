'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Footer from '../public/FooterComponent'
import $ from 'jquery'

require('styles/account/CancelPage.css');

class CancelPageComponent extends React.Component {
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
      url:"http://121.201.68.143/account/get_waiting_deal/",
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
      <div className="cancelpage-component">
        <AppBar
          title="委托/撤单"
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

CancelPageComponent.displayName = 'AccountCancelPageComponent';

// Uncomment properties you need
// CancelPageComponent.propTypes = {};
// CancelPageComponent.defaultProps = {};

export default CancelPageComponent;
