'use strict';

import React from 'react';
import $ from 'jquery'

require('styles/price/PriceDetail.css');

class PriceDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    $.ajax({
      method:"GET",
      url:"http://121.201.68.143/data/get_contract/?begin=20160912103543&end=20160912120000&contract=IH1609",
    }).done(function (data) {
      console.log(data);
    })
  }


  render() {
    return (
      <div className="pricedetail-component">
        Please edit src/components/price//PriceDetailComponent.js to update this component!
      </div>
    );
  }
}

PriceDetailComponent.displayName = 'PricePriceDetailComponent';

// Uncomment properties you need
// PriceDetailComponent.propTypes = {};
// PriceDetailComponent.defaultProps = {};

export default PriceDetailComponent;
