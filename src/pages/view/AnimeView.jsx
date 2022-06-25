import React, { useEffect, useState } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router"
import SeasonContainer from "../../components/SeasonContainer"

const AnimeView = () => {
  const [view, setView] = useState([])
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  let title = path.split("%20").toString().replaceAll(",", " ")

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
        <title>{title}</title>
      </Helmet>
      <section>
        <div className="relative">
          <img
            className="h-[65vh] object-cover w-[100%] md:h-auto"
            src={view.wallpaper}
            alt="wallpaper"
          />
          <div className="w-[100%] left-0 md:w-[36%] md:left-[4%] bottom-[12%] flex flex-col justify-end top-0 absolute">
            <img className="w-[55%] ml-3" src={view.logo} alt="logo" />
            <h1 className="font-sans text-[white] text-2xl font-bold md:mt-2 mt-0 ml-5 md:ml-0">
              {view.name}
            </h1>
            <p className="font-sf text-[white] text-lg font-medium md:mx-0 md:my-2 mx-4 my-2">
              {view.description}
            </p>
          </div>
        </div>
        <SeasonContainer />
      </section>
    </>
  )
}

export default AnimeView
