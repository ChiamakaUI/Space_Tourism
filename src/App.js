import Home from './Components/Home';
import Destination from './Components/Destination';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Crew from './Components/Crew';
import Technology from "./Components/Technology";
import { useEffect, useState } from 'react';




function App() {
  const [data, setData] = useState({});

  const { crew = [], destinations = [], technology = [] } = data;

     console.log(crew);
     console.log(destinations);
     console.log(technology);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/" component={(props) => <HomePage {...props} />} /> */}
        <Route
          path="/destination"
          component={() => <Destination destinations={destinations} />}
        />
        {/* <Route
          path="/destination"
          component={() => {
            return (
              <>
                {destinations.map((destination) => (
                  <Destination key={destination.name}destination={destination} />
                ))}
              </>
            );
          }}
        /> */}
        <Route path="/crew" component={() => <Crew crew={crew} />} />

        <Route
          path="/technology"
          component={() => <Technology technology={technology} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
