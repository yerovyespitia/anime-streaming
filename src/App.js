import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import AnimeView from "./pages/view/AnimeView";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router";
import ListContainer from "./pages/list/ListContainer";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/watch" ? null : <Navbar />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/view/:anime">
          <AnimeView />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route path="/spring">
          <ListContainer title={"Spring"} />
        </Route>
        <Route path="/fall">
          <ListContainer title={"Fall"} />
        </Route>
        <Route path="/popular">
          <ListContainer title={"Popular"} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
