import React from 'react';
import * as ENDPOINTS from '../constants/api';

const RestaurantOffersSections = ({ props }) => {
  const offer = props;
  console.log(offer);
  return (
    <div> {offer.header}</div>
  )
}

export default RestaurantOffersSections;