'use strict';

import React from 'react';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Footer from '../public/FooterComponent'

require('styles/school/SchoolListPage.css');

class SchoolListPageComponent extends React.Component {
  render() {
    return (
      <div className="schoollistpage-component">
        <AppBar
          title="期货学堂"
          showMenuIconButton={false}
        />
          <Menu>
            <Divider/>
            <MenuItem
              primaryText="基础知识"
              onClick={() => window.location.href="#/school/list/基础知识"}
            />
            <Divider/>
            <MenuItem
              primaryText="高手进阶"
              onClick={() => window.location.href="#/school/list/高手进阶"}
            />
            <Divider/>
            <MenuItem
              primaryText="风险控制"
              onClick={() => window.location.href="#/school/list/风险控制"}
            />
            <Divider/>
          </Menu>
        <Footer index={0}/>
      </div>
    );
  }
}

SchoolListPageComponent.displayName = 'SchoolSchoolListPageComponent';

// Uncomment properties you need
// SchoolListPageComponent.propTypes = {};
// SchoolListPageComponent.defaultProps = {};

export default SchoolListPageComponent;
