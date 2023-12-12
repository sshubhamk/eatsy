import React from 'react';
import '../styles/RestaurantDetailsSection.css';
import star from '../assets/images/star.svg';
import RestaurantOffersSections from './RestaurantOffersSections';
import RestaurantMenuAccordion from './RestaurantMenuAccordion';

const RestaurantDetailsSection = ({ props }) => {
  const details = props[0]?.card?.card?.info;
  const offers = props[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const menus = props[2]?.groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div>
      <div className='res-details-section'>
        <div className="res-details">
          <div className='res-name'>
            <span> {details?.name} </span>
            <div className='res-ratings'>
              <span>
                <img style={{ paddingRight: '5px' }} src={star} alt='ratings' />
                {details?.avgRating}
              </span>
              <p> {details?.totalRatingsString}</p>
            </div>
          </div>
          <p> {details?.cuisines?.join(', ')} </p>
          <p> {details?.areaName} </p>
        </div>
      </div>

      <div className='cost-for-two'>
        <p> {details?.costForTwoMessage} </p>
      </div>
      <div className='res-offers'>
        {offers?.map((offer, index) => (
          <RestaurantOffersSections key={index} props={offer.info} />
        ))}
      </div>
      <div className="res-menu">
        {menus?.length ? menus?.map((menu, index) => (
          <RestaurantMenuAccordion props={menu?.card?.card} key={index} />
        )) : ''}
      </div>
    </div >
  )
}

export default RestaurantDetailsSection;