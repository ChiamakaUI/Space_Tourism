import React from 'react'
import marsImage from "./image-mars.png"

const Mars = (props) => {
    console.log(props);
    // console.log(props[description]);
    return (
      <div className="planet">
        <div className="planet_image">
                  <img src={marsImage} alt={props.mars.name} />
        </div>
        <div className="planet_text">
          <h1>{props.mars.name}</h1>
          <p>{props.mars.description}</p>
          <hr />
          <div className="travelDesc">
            <div className="avg">
              <p> avg. distance </p>
              <h3> {props.mars.distance} </h3>
            </div>
            <div className="est">
              <p>est. travel time</p>
              <h3>{props.mars.travel} </h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Mars
