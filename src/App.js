import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import AnimeView from "./pages/view/AnimeView"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:anime" element={<AnimeView />} />
      </Routes>
    </>
  )
}

export default App
