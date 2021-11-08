import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "animate.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import start from "../../img/header/start-icon.png";
import add from "../../img/header/add-icon.png";
import addedicon from "../../img/header/added-icon.png";

import ep1 from "../../img/header-imgs/ep1.png";
import ep2 from "../../img/header-imgs/ep2.png";
import ep3 from "../../img/header-imgs/ep3.png";
import ep4 from "../../img/header-imgs/ep4.png";
import ep5 from "../../img/header-imgs/ep5.png";
import ep6 from "../../img/header-imgs/ep6.png";
import ep7 from "../../img/header-imgs/ep7.png";
import ep8 from "../../img/header-imgs/ep8.png";
import ep9 from "../../img/header-imgs/ep9.png";
import ep10 from "../../img/header-imgs/ep10.png";
import ep11 from "../../img/header-imgs/ep11.png";
import ep12 from "../../img/header-imgs/ep12.png";

const Container = styled.div``;
const HeaderContainer = styled.div`
  position: relative;
`;
const SeasonsContainer = styled.div`
  margin: 20px;
`;

const WallpaperImg = styled.img`
  width: 100%;
  @media (max-width: 800px) {
    border-radius: 20px;
    height: 60vh;
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: white;
  margin: 10px 0 0 0;
  @media (max-width: 800px) {
    margin: 10px 20px;
  }
`;

const InfoDesc = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
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
  align-self: center;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const AddedIcon = styled.img`
  width: 64px;
  height: 62px;
  animation: fadeIn;
  animation-duration: 0.5s;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    filter: grayscale(30%) opacity(90%);
  }
`;

const Episodes = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  gap: 40px 20px;
`;

const Episode = styled.div``;
const EpisodeImg = styled.img`
  width: 100%;
  cursor: pointer;
  &:hover {
    filter: grayscale(40%) opacity(80%);
  }
`;

const EpisodeTitle = styled.p`
  font-family: Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 0;
`;

const EpisodeTime = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: #bbbbbb;
  margin-top: 10px;
  margin-bottom: 0;
`;

const SeasonsTitle = styled.h2`
  font-family: Geneva, Verdana, sans-serif;
  color: white;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  cursor: pointer;
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
        <title>{path} Episodes </title>
      </Helmet>
      <Container>
        <HeaderContainer>
          <WallpaperImg src={view.wallpaper} />
          <InfoContainer>
            <InfoLogo src={view.logo} />
            <InfoTitle>{view.name}</InfoTitle>
            <InfoDesc>{view.description}</InfoDesc>
            <ButtonsContainer>
              <StartIcon src={start} />
              {added ? (
                <AddIcon onClick={handleClick} src={add} />
              ) : (
                <AddedIcon onClick={handleClick} src={addedicon} />
              )}
            </ButtonsContainer>
          </InfoContainer>
        </HeaderContainer>
        <SeasonsContainer>
          <SeasonsTitle>Season 1</SeasonsTitle>
          <Episodes>
            <Episode>
              <EpisodeImg src={ep1} />
              <EpisodeTitle>1. Cruelty</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep2} />
              <EpisodeTitle>2. Trainer Sakonji Urokodaki</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep3} />
              <EpisodeTitle>3. Sabito and Makomo</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep4} />
              <EpisodeTitle>4. Final Selection</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep5} />
              <EpisodeTitle>5. My Own Steel</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep6} />
              <EpisodeTitle>6. Swordsman Accompanying a Demon</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep7} />
              <EpisodeTitle>7. Muzan Kibutsuji</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep8} />
              <EpisodeTitle>8. The Smell of Enchanting Blood</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep9} />
              <EpisodeTitle>9. Temari Demon and Arrow Demon</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep10} />
              <EpisodeTitle>10. Together Forever</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep11} />
              <EpisodeTitle>11. Tsuzumi Mansion</EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
            <Episode>
              <EpisodeImg src={ep12} />
              <EpisodeTitle>
                12. The Boar Bares its Fangs, Zenitsu Sleeps
              </EpisodeTitle>
              <EpisodeTime>24min</EpisodeTime>
            </Episode>
          </Episodes>
        </SeasonsContainer>
      </Container>
    </>
  );
};

export default AnimeView;
