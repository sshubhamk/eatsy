import RestaurantCards from './RestaurantCards';
import { useEffect, useState, useRef, useCallback } from 'react';
import '../styles/Body.css';
import downArrow from '../assets/images/downArrow.svg';
import Shimmer from './Shimmer';
import * as ENDPOINT from '../constants/api';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [nextOffset, setnextOffset] = useState('');
  const [cardIndex, setCardIndex] = useState(1);
  const inputElem = useRef(null);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = !restaurantData.length ? await fetch(ENDPOINT.LIST_URL) :
      await fetch(ENDPOINT.LIST_URL, {
        method: 'POST',
        body: restaurantData.length && JSON.stringify({
          nextOffset: nextOffset,
          widgetOffset: {
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: pageCount
          }
        })
      });
    const jsonData = await data.json();
    setnextOffset(jsonData?.data?.success?.pageOffset?.nextOffset);
    setPageCount(jsonData?.data?.success?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo);
    const restaurants = jsonData.data?.success?.cards[cardIndex].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setCardIndex(0);
    setRestaurantData([...restaurantData, ...restaurants]);
  };

  const fetchSearchResults = async inputVal => {
    try {
      if (inputVal.length) {
        const url = `${ENDPOINT.SEARCH_URL}${inputVal}`;
        const results = await fetch(url);
        const suggestions = await results.json();
        setSearchResults(suggestions.data.suggestions);
        console.log(searchResults);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const handleSearch = useCallback(debounce(inputVal => fetchSearchResults(inputVal), 500), []);

  return (!restaurantData.length ? <Shimmer /> :
    <div className="main-body">
      <div className="search-block">
        <input type="text" className="search mr-2" name="search" ref={inputElem}
          placeholder="Search Restaurant, Food, Dessert, etc"
          onChange={() => handleSearch(inputElem.current?.value)} />
        <button className="primary-btn" name='search-btn'
          onClick={() => handleSearch(inputElem.current?.value)}> Search </button>
      </div>

      <div className="restaurant-cards">
        {restaurantData?.map((item) => (
          <RestaurantCards restaurantData={item.info} key={item?.info?.id} />
        ))}
        {restaurantData?.length ?
          <div className='load-more'>
            <p onClick={fetchRestaurantData}>Show more
              <img src={downArrow} alt='show-more' />
            </p>
          </div> : ''}
      </div>
    </div>
  );
}

export default Body;