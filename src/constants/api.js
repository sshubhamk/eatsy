export const LATITUDE = '19.0759837';
export const LONGITUDE = '72.8776559';

export const PROXY_URL = 'https://corsproxy.io/?';
export const BASE_URL = `${PROXY_URL}https://www.swiggy.com/`;
export const LIST_URL = `${BASE_URL}api/seo/getListing?lat=${LATITUDE}&lng=${LONGITUDE}`;
export const SEARCH_URL = `${BASE_URL}dapi/restaurants/search/suggest?lat=${LATITUDE}&lng=${LONGITUDE}&str=`;
export const BASE_MEDIA_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,`;
export const RESTAURANT_BY_ID_URL = `${BASE_URL}dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LATITUDE}&lng=${LONGITUDE}&restaurantId=`;