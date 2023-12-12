import React from 'react';
import '../styles/RestaurantOffersSections.css';
import * as ENDPOINTS from '../constants/api';

const RestaurantOffersSections = ({ props }) => {
  const offer = props;
  const offerImg = `${ENDPOINTS.BASE_MEDIA_URL}w_28,h_28/${offer.offerLogo}`
  return (
    offer?.couponCode && <div className='offer'>
      <p className='offer-header'>
        <img src={offerImg} alt='offer' />
        {offer?.header}
      </p>
      <p className='offer-code'>
        {offer?.couponCode} | {offer?.description}
      </p>
    </div>
  )
}

export default RestaurantOffersSections;