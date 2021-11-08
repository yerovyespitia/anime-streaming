import React, { useEffect, useState } from "react";
import "animate.css";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import video from "../img/header/video.mp4";

import playicon from "../img/header/play-icon.png";
import addicon from "../img/header/add-icon.png";
import infoicon from "../img/header/info-icon.png";
import demonlogo from "../img/header/logo.png";
import addedicon from "../img/header/added-icon.png";
import wallpaper from "../img/header/wallpaper.png";

const VideoContainer = styled.div`
  position: relative;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 4%;
  bottom: 20%;
  width: 650px;
  height: 100px;
  text-align: center;
  z-index: 1;
  @media (max-width: 1530px) {
    bottom: 18%;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

const PlayButton = styled.span`
  background-color: #fc0149;
  color: white;
  font-size: 25px;
  font-family: "SF Pro", Arial, Helvetica, sans-serif;
  border-radius: 60px;
  padding: 20px 70px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e60041;
  }
`;

const PlayIcon = styled.img`
  transform: translateY(20%);
  padding-right: 8px;
  width: 30px;
`;

const EpisodesButton = styled.span`
  cursor: pointer;
  background-color: white;
  color: black;
  font-size: 25px;
  font-family: "SF Pro", Arial, Helvetica, sans-serif;
  border-radius: 60px;
  padding: 20px 70px;
  margin-right: 20px;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const AddIcon = styled.img`
  cursor: pointer;
  transform: translateY(40%);
  width: 64px;
  animation: fadeIn;
  animation-duration: 0.5s;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const InfoIcon = styled.img`
  transform: translateY(25%);
  padding-right: 8px;
`;

const LogoContainer = styled.div`
  width: 450px;
  position: absolute;
  left: 7%;
  bottom: 32%;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const DemonLogo = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 1430px) {
    width: 400px;
  }
`;

const AddedIcon = styled.img`
  cursor: pointer;
  transform: translateY(40%);
  width: 64px;
  animation: fadeIn;
  animation-duration: 0.5s;
  &:hover {
    filter: grayscale(30%) opacity(90%);
  }
`;

const ReactPlayerContainer = styled.div`
  @media only screen and (max-device-width: 540px) {
    display: none;
  }
`;

const Wallpaper = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media only screen and (max-device-width: 730px) {
    display: inline-block;
    border-radius: 20px;
    height: 60vh;
    object-fit: cover;
  }
`;

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [added, setAdded] = useState(true);

  const handleClick = () => {
    setAdded(!added);
  };

  return (
    <VideoContainer>
      <LogoContainer>
        <Link to={"/view/Demon Slayer"}>
          <DemonLogo src={demonlogo} />
        </Link>
      </LogoContainer>
      <InfoContainer>
        <Link
          to={"/watch/Demon Slayer"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <PlayButton>
            <PlayIcon src={playicon} />
            Play
          </PlayButton>
        </Link>
        <Link to={"/view/Demon Slayer"} style={{ textDecoration: "none" }}>
          <EpisodesButton>
            <InfoIcon src={infoicon} />
            Episodes
          </EpisodesButton>
        </Link>
        {added ? (
          <AddIcon onClick={handleClick} src={addicon} />
        ) : (
          <AddedIcon onClick={handleClick} src={addedicon} />
        )}
      </InfoContainer>
      <ReactPlayerContainer>
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
        />
      </ReactPlayerContainer>
      <Wallpaper src={wallpaper} />
    </VideoContainer>
  );
};

export default Header;