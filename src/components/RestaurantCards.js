import { Link } from 'react-router-dom';
import star from '../assets/images/star.svg';
import * as ENDPOINTS from '../constants/api';

const RestaurantCards = (props) => {
  const { restaurantData } = props;
  const imgSrc = `${ENDPOINTS.BASE_MEDIA_URL}w_660/${restaurantData?.cloudinaryImageId}`;

  return (
    <Link to={`/restaurant-menu/${restaurantData.id}`}>
      <div className="restaurant-card">
        <img className="res-img" src={imgSrc} alt="" />
        <p className="bold-text line-clamp"> {restaurantData?.name} </p>
        <p className="ratings">
          <img className='svg' src={star} alt='ratings' />
          {Number(restaurantData?.avgRating).toFixed(1)}  • {restaurantData?.sla?.slaString}
        </p>
        <p className="small-text line-clamp"> {restaurantData?.cuisines?.join(', ')} </p>
        <p className="small-text line-clamp"> {restaurantData?.areaName} </p>
      </div >
    </Link>
  );
}

export default RestaurantCards;