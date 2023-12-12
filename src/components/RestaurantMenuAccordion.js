import React, { useState } from 'react';
import upArrow from '../assets/images/upArrow.svg';
import downArrow from '../assets/images/downArrow.svg';
import RestaurantMenus from './RestaurantMenus';
import '../styles/RestaurantMenuAccordion.css';

const RestaurantMenuAccordion = ({ props }) => {
  const items = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const onArrowClick = () => {
    setIsExpanded(!isExpanded);
  }

  const renderItems = () => {
    const arrowIcon = (
      <div className="arrow-icon">
        <img height={30} width={30} src={isExpanded ? upArrow : downArrow}
          alt={isExpanded ? downArrow : upArrow} />
      </div>
    );

    return (items?.itemCards?.length ?
      <div className="container">
        <div className="accordion">
          <div className="header" onClick={onArrowClick}>
            <h3> {items.title} </h3>
            {arrowIcon}
          </div>
          {isExpanded && items?.itemCards.length ?
            items?.itemCards?.map((item) =>
            (<div>
              <RestaurantMenus props={item} key={item?.card?.info?.id} />
            </div>)
            ) : ''}
        </div>
      </div> : ''
    )
  };

  return (
    <div> {renderItems()} </div>
  )
}

export default RestaurantMenuAccordion;