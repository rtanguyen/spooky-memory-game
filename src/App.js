import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
// import { BrowserRouter, useRouteMatch, Route } from "react-router-dom";

import "./App.css";

import Start from "./pages/Start";
import Game from "./pages/Game";

function App() {
  const [level, setLevel] = useState();
  // const [cardsArr, setCardsArr] = useState(imgArr);
  //shuffle cards based on level and set to cardsArr

  return (
    <div className="App container">
      <Game />

      {/* <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/">
            <Start>
              level={level}
              setLevel={setLevel}
              cardsArr={cardsArr}
              setCardsArr={setCardsArr}
            </Start>
          </Route>
          <Route exact path="/">
            <Game>
              level={level}
              setLevel={setLevel}
              cardsArr={cardsArr}
              setCardsArr={setCardsArr}
            </Game>
          </Route>
          <Route exact path="/" component={Game} />
          <img src={imgArr[0]} className="img-fluid" />
        </Switch> */}
    </div>
  );
}

export default App;
