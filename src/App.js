import React from "react"
import { Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch"
import AnimeView from "./pages/view/AnimeView"

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/view/:anime">
        <AnimeView />
      </Route>
      <Route path="/watch/:anime">
        <Watch />
      </Route>
    </>
  )
}

export default App
