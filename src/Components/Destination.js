import React from 'react'
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Moon from './dest_subpage/Moon';
import Mars from './dest_subpage/Mars';
import Europa from './dest_subpage/Europa';
import Titan from './dest_subpage/Titan';


const Destination = (props) => {
  const { destinations } = props;
  const { moon, mars, europa, titan } = React.useMemo(() => {
    return destinations.reduce((acc, destination) => {
      const { name } = destination
      
      acc[name.toLowerCase()] = destination

      return acc;
    }, {})
  }, [destinations])


  const { path, url } = useRouteMatch()
  
    return (
      <div className="destination">
        <h3>
          <span id="des_number">01</span>Pick Your Destination
          {/* {props.name ='ada'} */}
        </h3>
        <div className="subNav">
          <ul>
            <li>
              <Link to={`${url}/moon`}>Moon</Link>
            </li>
            <li>
              <Link to={`${url}/mars`}>Mars</Link>
            </li>
            <li>
              <Link to={`${url}/europa`}>Europa</Link>
            </li>
            <li>
              <Link to={`${url}/titan`}>Titan</Link>
            </li>
          </ul>
        </div>
        <div className="destinationContent">
          <Switch>
            {/* <Route
              path="/destination"
              component={() => <Destination destinations={destinations} />}
            /> */}
            <Route
              path={`${path}/moon`}
              component={() => <Moon moon={moon} />}
              exact
            />
            <Route
              path={`${url}/mars`}
              component={() => <Mars mars={mars} />}
              exact
            />
            <Route
              path={`${url}/europa`}
              component={() => <Europa europa={europa} />}
              exact
            />
            <Route
              path={`${url}/titan`}
              component={() => <Titan titan={titan} />}
              exact
            />
          </Switch>
        </div>
      </div>
    );
}

export default Destination
