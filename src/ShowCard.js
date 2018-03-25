import React from 'react';
import './ShowCard.css';

const ShowCard = props => {
  return(

    <div className="tile">
      <div className="tile-img">
        <span className="helper"></span>
        <img src={`${props['im:image'][0].label}`} alt='Loading..'/>
      </div>

      <div className="tile-content">
        <h3 className="tile-title">{props['im:name'].label}</h3>
        <p className="tile-price">{props['im:price'].attributes.amount} {props['im:price'].attributes.currency}</p>
        <p className="tile-title">{props['im:artist'].label}</p>
      </div>
    </div>
)};

export default ShowCard;
