import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router"
import SeasonContainer from "../../components/Season/SeasonContainer"

const Container = styled.div``
const HeaderContainer = styled.div`
  position: relative;
`

const WallpaperImg = styled.img`
  width: 100%;
  @media (max-width: 800px) {
    border-radius: 0 0 16px 16px;
    height: 65vh;
    object-fit: cover;
  }
`

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 12%;
  left: 4%;
  width: 36%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 800px) {
    left: 0;
    width: 100%;
  }
`

const InfoLogo = styled.img`
  width: 55%;
`

const InfoTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  color: white;
  margin: 10px 0 0 0;
  @media (max-width: 800px) {
    margin: 0 20px;
  }
`

const InfoDesc = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin: 10px 0 10px 0;
  @media (max-width: 800px) {
    margin: 10px 20px;
  }
`

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
      <Container>
        <HeaderContainer>
          <WallpaperImg src={view.wallpaper} />
          <InfoContainer>
            <InfoLogo src={view.logo} />
            <InfoTitle>{view.name}</InfoTitle>
            <InfoDesc>{view.description}</InfoDesc>
          </InfoContainer>
        </HeaderContainer>
        <SeasonContainer />
      </Container>
    </>
  )
}

export default AnimeView
