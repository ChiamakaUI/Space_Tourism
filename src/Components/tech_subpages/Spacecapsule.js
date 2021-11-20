import React from 'react'
import spacecapsule from "./image-space-capsule-portrait.jpg";

const Spacecapsule = (props) => {
    return (
      <div className="equipment">
        <div className="equipment_text">
          <p className="termin">The terminology</p>
          <h2>{props.spacecapsule.name}</h2>
          <p> {props.spacecapsule.description}</p>
        </div>
        <div className="equipment_image">
          <img src={spacecapsule} alt={props.spacecapsule.name} />
        </div>
      </div>
    );
}

export default Spacecapsule
