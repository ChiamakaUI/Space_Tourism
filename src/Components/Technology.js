import React from 'react'
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Spacecapsule from './tech_subpages/Spacecapsule';
import Spaceport from './tech_subpages/Spaceport';
import Launchvehicle from './tech_subpages/Launchvehicle';
const Technology = (props) => {
     const { technology } = props;  
     const { launchvehicle, spaceport, spacecapsule } =  React.useMemo(() => {
        return technology.reduce((acc, technology) => {
          const { name } = technology;

          acc[name.toLowerCase().split(" ").join("")] = technology;

            return acc;
        }, {});
      }, [technology]);
    
    const { path, url } = useRouteMatch();
    return (
      <div className="technology">
        <h3>
          <span id="tech_number">03</span>Space Launch 101
        </h3>
        <div className="techNav">
          <ul>
            <li>
              <Link
                to={`${url}/launchvehicle`}> 1
              </Link>
            </li>
            <li>
              <Link
                to={`${url}/spaceport`}>2
              </Link>
            </li>
            <li>
              <Link
                to={`${url}/spacecapsule`}>3
              </Link>
            </li>
          </ul>
        </div>
        <div className="technologyContent">
          <Switch>
            {/* <Route
              path="/destination"
              component={() => <Destination destinations={destinations} />}
            /> */}
            <Route
              path={`${path}/launchvehicle`}
              component={() => <Launchvehicle launchvehicle={launchvehicle} />}
              exact
            />
            <Route
              path={`${url}/spaceport`}
              component={() => <Spaceport spaceport={spaceport} />}
            />
            <Route
              path={`${url}/spacecapsule`}
              component={() => <Spacecapsule spacecapsule={spacecapsule} />}
            />
          </Switch>
        </div>
      </div>
    );
}

export default Technology
