import { RestaurantCards } from './RestaurantCards';
import './body.css';

export const Body = () => {
  return (
    <div className="main-body">
      <div className="search-block">
        <input type="text" className="search" name="search" placeholder="Search Restaurant, Food, Desset, etc" />
        <button className="primary-btn">Search</button>
      </div>

      <div className="restaurant-cards">
        <RestaurantCards
          imgSrc="https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-700x420.png"
          restaurant_name="Burger King"
          cuisine="Burger"
          ratings="3.2" />
        <RestaurantCards
          imgSrc="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-768x432.png"
          restaurant_name="KFC"
          cuisine="Fried Chicken"
          ratings="3.9" />
        <RestaurantCards
          imgSrc="https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-640x360.png"
          restaurant_name="McDonalds"
          cuisine="Burgers & Fries"
          ratings="4.0" />
        <RestaurantCards
          imgSrc="https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-640x356.png"
          restaurant_name="Subway"
          cuisine="Subs"
          ratings="3.5" />
      </div>
    </div>
  );
}