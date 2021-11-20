import React from 'react'
import spaceport from "./image-spaceport-portrait.jpg";
const Spaceport = (props) => {
    return (
      <div className="equipment">
        <div className="equipment_text">
          <p className="termin">The terminology</p>
          <h2>{props.spaceport.name}</h2>
          <p> {props.spaceport.description}</p>
        </div>
        <div className="equipment_image">
          <img src={spaceport} alt={props.spaceport.name} />
        </div>
      </div>
    );
}

export default Spaceport
