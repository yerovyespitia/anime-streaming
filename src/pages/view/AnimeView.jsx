import React, { useEffect, useState } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router"
import SeasonContainer from "../../components/SeasonContainer"
import "../../styles/view.css"

const AnimeView = () => {
  const [view, setView] = useState([])
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`https://anime-streaming-app-api.herokuapp.com/api/view/${path}`)
      .then((res) => {
        setView(res.data)
      })
  }, [path])

  return (
    <>
      <Helmet>
        <title>{path}</title>
      </Helmet>
      <div className="viewContainer">
        <div className="viewHeader">
          <img className="viewWallpaper" src={view.wallpaper} alt="wallpaper" />
          <div className="viewContent">
            <img id="viewLogo" src={view.logo} alt="logo"/>
            <h1 className="viewTitle">{view.name}</h1>
            <p className="viewDesc">{view.description}</p>
          </div>
        </div>
        <SeasonContainer />
      </div>
    </>
  )
}

export default AnimeView
