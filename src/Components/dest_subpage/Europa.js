import React from 'react'
import europaImage from "./image-europa.png";

const Europa = (props) => {
     console.log(props);
    return (
      <div className="planet">
        <div className="planet_image">
          <img src={europaImage} alt={props.europa.name} />
        </div>
        <div className="planet_text">
          <h1>{props.europa.name}</h1>
          <p>{props.europa.description}</p>
          <hr />
          <div className="travelDesc">
            <div className="avg">
              <p> avg. distance </p>
              <h3> {props.europa.distance} </h3>
            </div>
            <div className="est">
              <p>est. travel time</p>
              <h3>{props.europa.travel} </h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Europa
