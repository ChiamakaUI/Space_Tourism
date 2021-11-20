import React, { useState } from "react";
import douglas from "./image-douglas-hurley.png";
import mark from "./image-mark-shuttleworth.png";
import victor from "./image-victor-glover.png";
import anousheh from "./image-anousheh-ansari.png";

const Crew = (props) => {
  
  // const [slideIndex, setSlideIndex] = useState(1)
  const [slideIndex, setSlideIndex] = useState(0);
  const { crew } = props;
  const {
    commander,
    missionspecialist,
    pilot,
    flightengineer,
  } = React.useMemo(() => {
    return crew.reduce((acc, crew) => {
      const { role } = crew;

      acc[role.toLowerCase().split(" ").join("")] = crew;

      return acc;
    }, {});
  }, [crew]);

  const slideShow = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="crew">
      <h3>
        <span id="crew_number">02</span>Meet Your Crew
      </h3>

      <div className={slideIndex === 0 ? "crew_member" : "showing"}>
        <div className="crew_member_text">
          <h4> {commander.role} </h4>
          <h2> {commander.name}</h2>
          <p>{commander.bio} </p>
        </div>
        <div className="crew_member_image">
          <img src={douglas} alt={commander.name} />
        </div>
      </div>
      <div className={slideIndex === 1 ? "crew_member" : "showing"}>
        <div className="crew_member_text">
          <h4> {missionspecialist.role} </h4>
          <h2> {missionspecialist.name}</h2>
          <p>{missionspecialist.bio} </p>
        </div>
        <div className="crew_member_image">
          <img src={mark} alt={missionspecialist.name} />
        </div>
      </div>
      <div className={slideIndex === 2 ? "crew_member" : "showing"}>
        <div className="crew_member_text">
          <h4> {pilot.role} </h4>
          <h2> {pilot.name}</h2>
          <p>{pilot.bio} </p>
        </div>
        <div className="crew_member_image">
          <img src={victor} alt={pilot.name} />
        </div>
      </div>
      <div className={slideIndex === 3 ? "crew_member" : "showing"}>
        <div className="crew_member_text">
          <h4> {flightengineer.role} </h4>
          <h2> {flightengineer.name}</h2>
          <p>{flightengineer.bio} </p>
        </div>
        <div className="crew_member_image">
          <img src={anousheh} alt={flightengineer.name} />
        </div>
      </div>

      <div className="dots">
        {[0, 1, 2, 3].map((item, index) => (
          <span
            key={index}
            onClick={() => {
              console.log(index);
              slideShow(index);
            }}
            className={slideIndex === index ? "dot active" : "dot"}
           
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Crew;
