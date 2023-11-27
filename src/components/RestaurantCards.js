import star from '../assets/images/star.svg';

const RestaurantCards = (props) => {
  const { restaurantData } = props;
  const ratingsStyling = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  };
  const imgSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData?.cloudinaryImageId}`;

  return (
    <div className="restaurant-card">
      <img className="res-img" src={imgSrc} alt="" />
      <p className="bold-text line-clamp"> {restaurantData?.name} </p>
      <p className="bold-text" style={ratingsStyling}>
        <img className='svg' src={star} alt='ratings' />
        {Number(restaurantData?.avgRating).toFixed(1)}
      </p>
      <p className="small-text line-clamp"> {restaurantData?.cuisines?.join(', ')} </p>
      <p className="small-text line-clamp"> {restaurantData?.areaName} </p>
    </div >
  );
}

export default RestaurantCards;