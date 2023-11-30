import React from 'react';
import '../styles/PageNotFound.css';
import { Link, useRouteError } from 'react-router-dom';

const PageNotFound = () => {
  const pageErrorMsg = useRouteError();
  console.log(pageErrorMsg);
  return (
    <div className='main'>
      <div className="four_zero_four_bg">
      </div>
      <div className="text-center">
        <h1>404</h1>
        <h3> Looks like you're lost. </h3>
        <h3 style={{ 'marginBottom': '1rem' }}>The page you are looking for is not available!</h3>
        <span className="primary-btn"> <Link to={'/'}> Go Back </Link></span>
      </div>
    </div >
  )
}

export default PageNotFound;