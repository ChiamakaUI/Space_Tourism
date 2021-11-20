import React from 'react'
import moonImage from "./image-moon.png";

const Moon = (props) => {
    console.log(props)
    return (
      <div className="planet">
        <div className="planet_image">
          <img src={moonImage} alt={props.moon.name} />
        </div>
        <div className="planet_text">
          <h1>{props.moon.name}</h1>
          <p>{props.moon.description}</p>
          <hr />
          <div className="travelDesc">
            <div className="avg">
              <p> avg. distance </p>
              <h3> {props.moon.distance} </h3>
            </div>
            <div className="est">
              <p>est. travel time</p>
              <h3>{props.moon.travel} </h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Moon

