import React, { useEffect } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import video from "../img/header/video.mp4"
import logo from "../img/header/logo.png"
import play from "../img/play.png"
import info from "../img/info.png"
import add from "../img/add.png"

const Container = styled.div`
  position: relative;
`

const ContentContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 4%;
  width: 50%;
  z-index: 10;
`

const LogoContainer = styled.div`
  width: 25vw;
`

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

const ButtonsContainer = styled.div`
  display: inline-flex;
  margin-top: 20px;
  max-width: 27vw;
  @media (max-width: 650px) {
    display: none;
  }
`

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  font-family: "Roboto";
  font-size: 24px;
  background-color: #f5025a;
  border-radius: 60px;
  color: white;
  margin-right: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 950px) {
    font-size: 20px;
    height: 50px;
  }
`

const EpisodesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  font-family: "Roboto";
  font-size: 24px;
  background-color: white;
  border-radius: 60px;
  color: black;
  margin-right: 10px;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 950px) {
    font-size: 20px;
    height: 50px;
  }
`

const Play = styled.img`
  width: 22px;
  margin-right: 8px;
  @media (max-width: 950px) {
    width: 18px;
  }
`
const Info = styled.img`
  width: 28px;
  margin-right: 8px;
  @media (max-width: 950px) {
    width: 18px;
  }
`

const Add = styled.img`
  width: 60px;
  cursor: pointer;
  @media (max-width: 950px) {
    width: 50px;
  }
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
      <ContentContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <ButtonsContainer>
          <PlayButton>
            <Play src={play} />
            Play
          </PlayButton>
          <EpisodesButton>
            <Info src={info} />
            Episodes
          </EpisodesButton>
          <Add src={add} />
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  )
}

export default Header
