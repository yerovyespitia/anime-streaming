import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router"
import Season from "./Season"
import "../styles/seasoncontainer.css"

const SeasonContainer = () => {
  const [seasons, setSeasons] = useState([])
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`https://anime-streaming-app-api.herokuapp.com/api/season/${path}`)
      .then((res) => setSeasons(res.data.episodes))
  }, [path])

  return (
    <>
      <div className="seasonsContainer">
        <h2 className="seasonTitle">Season 1</h2>
        <div className="episodes">
          {seasons.map((s, i) => (
            <Season season={s} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SeasonContainer
