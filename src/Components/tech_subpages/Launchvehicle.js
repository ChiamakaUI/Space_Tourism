import React from 'react'
import lauchImage from "./image-launch-vehicle-portrait.jpg";

const launchvehicle = (props) => {
    console.log(props)
    return (
      <div className="equipment">
        <div className="equipment_text">
          <p className="termin">The terminology</p>
          <h2>{props.launchvehicle.name}</h2>
          <p> {props.launchvehicle.description}</p>
        </div>
        <div className="equipment_image">
          <img src={lauchImage} alt={props.launchvehicle.name} />
        </div>
      </div>
    );
}

export default launchvehicle
