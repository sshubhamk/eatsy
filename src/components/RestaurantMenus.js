import React from 'react';
import '../styles/RestaurantMenus.css';
import * as API from '../constants/api';
import veg from '../assets/images/veg.svg';
import nonVeg from '../assets/images/nonVeg.svg';
import bestSellerImg from '../assets/images/bestSeller.svg';

const RestaurantMenus = ({ props }) => {
  const menu = props?.card?.info;
  const dishTypeImg = menu?.itemAttribute?.vegClassifier === 'VEG' ? veg : nonVeg;
  const menuImg = `${API.BASE_MEDIA_URL}w_208,h_208,c_fit/${menu.imageId}`;

  const bestSeller = () => {
    if (menu.ribbon.text) {
      return (
        <div className='best-seller'>
          <img src={bestSellerImg} alt="" />
          <span>{menu?.ribbon?.text}</span>
        </div>
      )
    }
  }

  return (
    <div className='res-menu'>
      <div className='dish-name'>
        <p className='dish-type'>
          <img src={dishTypeImg} alt={dishTypeImg} />
          {bestSeller()}
        </p>
        <span>
          {menu?.name}
          <img src={menuImg} alt={menuImg} />
        </span>
        {/* <button>Add</button> */}
      </div>
      <div className="price">
        <p> {menu?.defaultPrice ? menu?.defaultPrice / 100 : menu?.price / 100} </p>
      </div>
      <div className="description">
        <p> {menu?.description} </p>
      </div>
    </div>
  )
}

export default RestaurantMenus;