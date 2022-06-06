import React, { useState } from "react"
import "../styles/season.css"

const Season = (seasons) => {
  const [ep] = useState(seasons.season)
  return (
    <>
      <div className="episode">
        <img className="episodeImg" src={ep.thumbnail} alt="episodes" />
        <p className="episodeTitle">{ep.nameEp}</p>
        <p className="episodeTime">{ep.time}</p>
      </div>
    </>
  )
}

export default Season
