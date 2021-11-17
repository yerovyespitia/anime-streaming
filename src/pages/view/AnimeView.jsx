import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import start from "../../img/header/start-icon.png";
import add from "../../img/header/add-icon.png";
import addedicon from "../../img/header/added-icon.png";
import SeasonContainer from "../../components/Season/SeasonContainer";

const Container = styled.div``;
const HeaderContainer = styled.div`
  position: relative;
`;

const WallpaperImg = styled.img`
  width: 100%;
  @media (max-width: 800px) {
    border-radius: 0 0 16px 16px;
    height: 65vh;
    object-fit: cover;
  }
`;

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
    position: relative;
    width: 100%;
    margin: 5px 0;
  }
`;

const InfoLogo = styled.img`
  width: 55%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const InfoTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  color: white;
  margin: 10px 0 0 0;
  @media (max-width: 800px) {
    margin: 10px 20px;
  }
`;

const InfoDesc = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin: 10px 0 10px 0;
  @media only screen and (max-width: 800px) {
    display: block;
  }
  @media (max-width: 800px) {
    margin: 10px 20px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

const StartIcon = styled.img`
  width: clamp(180px, 30%, 207px);
  cursor: pointer;
  &:hover {
    filter: grayscale(30%) opacity(95%);
  }
`;

const AddIcon = styled.img`
  width: 55px;
  align-self: center;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const AddedIcon = styled.img`
  width: 55px;
  animation-duration: 0.5s;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    filter: grayscale(30%) opacity(90%);
  }
`;

const AnimeView = () => {
  const [view, setView] = useState([]);
  const [added, setAdded] = useState(true);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchView = async () => {
      const res = await axios.get(
        `https://anime-streaming-app-api.herokuapp.com/api/view/${path}`
      );
      setView(res.data);
    };
    fetchView();
  }, [path]);

  const handleClick = () => {
    setAdded(!added);
  };

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
            <ButtonsContainer>
              <Link to={`/watch/${view.name}`} style={{width: "180px"}}>
                <StartIcon src={start} />
              </Link>
              {added ? (
                <AddIcon onClick={handleClick} src={add} />
              ) : (
                <AddedIcon onClick={handleClick} src={addedicon} />
              )}
            </ButtonsContainer>
          </InfoContainer>
        </HeaderContainer>
        <SeasonContainer />
      </Container>
    </>
  );
};

export default AnimeView;
