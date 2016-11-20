require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AP from './home/HomePageComponent'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="index">
          <AP/>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
