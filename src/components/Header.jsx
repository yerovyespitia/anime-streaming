import React, { useEffect } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import video from "../img/header/video.mp4"

const Container = styled.div`
  width: 100%;
`

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <ReactPlayer
        url={video}
        playing={true}
        muted={true}
        width="100%"
        height="100%"
        loop={true}
        playsInline={true}
      />
    </Container>
  )
}

export default Header
