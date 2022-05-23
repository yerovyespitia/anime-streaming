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
  width: 100%;
`

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 4%;
  width: 36%;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img``

const Summary = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: white;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  cursor: pointer;
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
  cursor: pointer;
`

const Play = styled.img`
  width: 22px;
  margin-right: 8px;
`
const Info = styled.img`
  width: 28px;
  margin-right: 8px;
`

const Add = styled.img`
  width: 60px;
  cursor: pointer;
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
        <Logo src={logo} />
        <Summary>
          The story takes place in Taishō-era Japan. It follows Tanjiro Kamado
          and his sister Nezuko Kamado as they seek a cure for Nezuko’s demon
          curse.
        </Summary>
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
