import RestaurantCards from './RestaurantCards';
import { useEffect, useState, useRef, useCallback } from 'react';
import './Body.css';
import downArrow from '../assets/images/downArrow.svg';
import Shimmer from './Shimmer';

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
  const [pageCount, setPageCount] = useState(10);
  const [nextOffset, setnextOffset] = useState('');
  const [cardIndex, setCardIndex] = useState(1);
  const inputElem = useRef(null);
  const proxy_url = 'https://corsproxy.io/?';
  const swiggy_url = 'https://www.swiggy.com/';

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const url = `${proxy_url}${swiggy_url}api/seo/getListing?lat=19.0759837&lng=72.8776559`;
    const data = !restaurantData.length ? await fetch(url) : await fetch(url, {
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
        const url = `${proxy_url}${swiggy_url}dapi/restaurants/search/suggest?lat=19.2133035606211&lng=72.87611371920241&str=${inputVal}`;
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
          placeholder="Search Restaurant, Food, Desset, etc" onChange={() => handleSearch(inputElem.current?.value)} />
        <button className="primary-btn" name='search-btn'
          onClick={() => handleSearch(inputElem.current?.value)}> Search </button>
      </div>

      <div className="restaurant-cards">
        {restaurantData?.map((item) => (
          <RestaurantCards restaurantData={item.info} key={item?.info?.id} />
        ))}
        {restaurantData?.length ?
          <div className='load-more'>
            <span onClick={fetchRestaurantData}>Show more
              <img src={downArrow} alt='show-more' />
            </span>
          </div> : ''}
      </div>
    </div>
  );
}

export default Body;