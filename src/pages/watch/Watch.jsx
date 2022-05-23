import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import axios from "axios"
import { useLocation } from "react-router"

const WatchContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const Watch = () => {
  const [watch, setWatch] = useState([])
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  useEffect(() => {
    axios
      .get(`https://anime-streaming-app-api.herokuapp.com/api/watch/${path}`)
      .then((res) => {
        setWatch(res.data)
      })
  }, [path])

  return (
    <WatchContainer>
      <ReactPlayer
        url={watch.opening}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
      />
    </WatchContainer>
  )
}

export default Watch
