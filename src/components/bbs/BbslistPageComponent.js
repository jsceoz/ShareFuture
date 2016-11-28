'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import Footer from '../public/FooterComponent'
import Divider from 'material-ui/Divider'
import $ from 'jquery'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/create';

require('styles/bbs/BbslistPage.css');

class BbslistPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/bbs/showlist/"
    }).done(function (data) {
      console.log(data)
      self.setState({
        list:data
      })
    })
  }

  render() {
    return (
      <div className="bbslistpage-component">
        <AppBar
          title="期货论坛"
          showMenuIconButton={false}
        />
        <List>
          {this.state.list.map((item) => (
            <div>
              <ListItem
                primaryText={item.title}
                onClick={() => window.location.href="#/bbs/detail/"+item.id}
              />
              <Divider/>
            </div>
          ))}
        </List>
        <FloatingActionButton
          className="btn-add-post"
          onClick={() => window.location.href="#/create"}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Footer index={0}/>
      </div>
    );
  }
}

BbslistPageComponent.displayName = 'BBSBBSListPageComponent';

// Uncomment properties you need
// BbslistPageComponent.propTypes = {};
// BbslistPageComponent.defaultProps = {};

export default BbslistPageComponent;
