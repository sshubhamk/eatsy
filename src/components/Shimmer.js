import React from 'react'
import './Body.css';
import './NavBar.css';
import './Shimmer.css';

const Shimmer = () => {

  const Cards = () => {
    return (
      <div className="restro-card effect">
        <div className="card-img"></div>
        <div className='lines effect'></div>
        <div className='lines effect'></div>
        <div className='lines effect'></div>
        <div className='lines effect'></div>
      </div>
    )
  }

  return (
    <div className="main-body">
      <div className="search-block">
        <div className="input-box mr-2 effect"></div>
        <div className="btn effect"> </div>
      </div>

      <div className="restaurant-cards">
        {[...Array(10).fill(1).map((value, index) => (
          <Cards key={index} />
        ))]}
      </div>
    </div >
  )
}

export default Shimmer;
