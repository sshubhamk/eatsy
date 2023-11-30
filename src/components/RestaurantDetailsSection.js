import React from 'react';
import '../styles/RestaurantDetailsSection.css';
import star from '../assets/images/star.svg';
import RestaurantOffersSections from './RestaurantOffersSections';

const RestaurantDetailsSection = ({ props }) => {
  const details = props[0]?.card?.card?.info;
  const offers = props[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log(offers);
  console.log(details);
  return (
    <div>
      <div className='res-details-section'>
        <div className="res-details">
          <div className='res-name'>
            <span> {details?.name} </span>
            <p className='res-ratings'>
              <img style={{ paddingRight: '5px' }} src={star} alt='ratings' />
              {details?.avgRating} <br />
              <span> {details?.totalRatingsString}</span>
            </p>
          </div>
          <p> {details?.cuisines?.join(', ')} </p>
          <p> {details?.areaName} </p>
        </div>
      </div>

      <div className='res-offers'>
        {offers?.map((offer) => (
          <RestaurantOffersSections props={offer.info} />
        ))}
      </div>
    </div >
  )
}

export default RestaurantDetailsSection;