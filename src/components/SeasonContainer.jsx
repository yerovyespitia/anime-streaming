import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router"
import Season from "./Season"

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
      <div className="m-7">
        <h2 className="font-sf text-2xl text-[white] font-bold tracking-wide cursor-pointer mb-4">
          Season 1
        </h2>
        <div className="grid grid-cols-custom gap-x-5 gap-y-10">
          {seasons.map((s, i) => (
            <Season season={s} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SeasonContainer
