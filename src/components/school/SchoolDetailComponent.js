'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Footer from '../public/FooterComponent'
import $ from 'jquery'

require('styles/school/SchoolDetail.css');

class SchoolDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:{}
    }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/help/?id="+this.props.params.id
    }).done(function (data) {
      console.log(data);
      self.setState({
        item:data[0]
      })
    })
  }

  render() {
    return (
      <div className="schooldetail-component">
        <AppBar
          title={this.state.item.title}
          showMenuIconButton={false}
        />
        <h1 className="news-detail-title">{this.state.item.title}</h1>
        <Divider/>
        <div className="news-detail-p" dangerouslySetInnerHTML={{__html: this.state.item.content}}></div>
        <div className="placeholder"></div>
        <Footer index={0}/>
      </div>
    );
  }
}

SchoolDetailComponent.displayName = 'SchoolSchoolDetailComponent';

// Uncomment properties you need
// SchoolDetailComponent.propTypes = {};
// SchoolDetailComponent.defaultProps = {};

export default SchoolDetailComponent;
