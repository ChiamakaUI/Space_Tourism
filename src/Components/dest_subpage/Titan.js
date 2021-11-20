import React from 'react'
import titanImage from "./image-titan.png";

const Titan = (props) => {
    console.log(props)
    return (
      <div className="planet">
        <div className="planet_image">
          <img src={titanImage} alt={props.titan.name} />
        </div>
        <div className="planet_text">
          <h1>{props.titan.name}</h1>
          <p>{props.titan.description}</p>
          <hr />
          <div className="travelDesc">
            <div className="avg">
              <p> avg. distance </p>
              <h3> {props.titan.distance} </h3>
            </div>
            <div className="est">
              <p>est. travel time</p>
              <h3>{props.titan.travel} </h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Titan
