export const RestaurantCards = (props) => {
  return (
    <div className="restaurant-card">
      <img src={props.imgSrc} alt="" />
      <p> {props.restaurant_name} </p>
      <p> {props.cuisine} </p>
      <p> {props.ratings} </p>
    </div>
  );
}