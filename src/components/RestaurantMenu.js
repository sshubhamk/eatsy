import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ENDPOINTS from '../constants/api';
import RestaurantDetailsSection from "./RestaurantDetailsSection";

const RestaurantMenu = () => {
  const id = useParams().id;
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(`${ENDPOINTS.RESTAURANT_BY_ID_URL}${id}`);
    const convertToJson = await menuData.json();
    setRestaurantMenuData([...convertToJson?.data?.cards]);
    console.log(restaurantMenuData);
    console.log(convertToJson?.data?.cards);
  }

  if (restaurantMenuData.length) return (
    <div>
      <RestaurantDetailsSection props={restaurantMenuData} />
    </div>
  )
}

export default RestaurantMenu;
