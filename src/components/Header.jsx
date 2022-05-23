import React, { useEffect } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import video from "../img/header/video.mp4"
import wallpaper from "../img/header/wallpaper.png"

const Container = styled.div`
  width: 100%;
  position: relative;
`

const VideoContainer = styled.div`
  position: relative;
  @media only screen and (max-device-width: 730px) {
    display: none;
  }
`

const Wallpaper = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media only screen and (max-device-width: 730px) {
    display: inline-block;
    border-radius: 0 0 16px 16px;
    height: 65vh;
    object-fit: cover;
  }
`

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <VideoContainer>
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
        />
      </VideoContainer>
      <Wallpaper src={wallpaper} />
    </Container>
  )
}

export default Header
