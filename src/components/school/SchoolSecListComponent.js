'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Footer from '../public/FooterComponent'
import $ from 'jquery'

require('styles/school/SchoolSecList.css');

class SchoolSecListComponent extends React.Component {
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
      url:"http://121.201.68.143/school/get_category/?category="+this.props.params.category
    }).done(function (data) {
      console.log(data);
      self.setState({
        list:data
      })

    })
  }

  render() {
    return (
      <div className="schoolseclist-component">
        <AppBar
          title="期货学堂"
          showMenuIconButton={false}
        />
        <List>
          {this.state.list.map((item) => (
            <div>
              <ListItem
                primaryText={item.title}
                onClick={() => window.location.href="#/school/detail/"+item.id}
              />
              <Divider/>
            </div>
          ))}
        </List>
        <Footer index={0} />
      </div>
    );
  }
}

SchoolSecListComponent.displayName = 'SchoolSchoolSecListComponent';

// Uncomment properties you need
// SchoolSecListComponent.propTypes = {};
// SchoolSecListComponent.defaultProps = {};

export default SchoolSecListComponent;
