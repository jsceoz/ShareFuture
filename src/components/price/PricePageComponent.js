'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar'
import $ from 'jquery'

require('styles/price/PricePage.css');

class PricePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    $.ajax({
      method:"GET",
      url:"http://webcffex.hermes.hexun.com/cffex/quotelist?code=CFFEXIF1609&column=Code,Price,UpDown,UpDownRate",
      dataType: "jsonp",
      jsonp: "callback",
    }).done(function (data) {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="pricepage-component">
        <AppBar
          title="行情"
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

PricePageComponent.displayName = 'PricePricePageComponent';

// Uncomment properties you need
// PricePageComponent.propTypes = {};
// PricePageComponent.defaultProps = {};

export default PricePageComponent;
