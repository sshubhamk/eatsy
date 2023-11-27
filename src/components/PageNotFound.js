import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='main'>
      <div className="four_zero_four_bg">
      </div>
      <div className="text-center">
        <h1>404</h1>
        <h3> Looks like you're lost. </h3>
        <h3 style={{ 'marginBottom': '1rem' }}>The page you are looking for is not available!</h3>
        <span className="primary-btn">Go Back</span>
      </div>
    </div >
  )
}

export default PageNotFound;