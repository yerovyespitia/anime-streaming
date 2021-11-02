import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "animate.css";

import play from "../../img/info-play-icon.png";
import add from "../../img/info-add-icon.png";
import addedicon from "../../img/added-icon.png";
import watch from "../../img/watch-icon.png";

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1908px;
  height: 739px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 3;
  @media (max-width: 1960px) {
    width: 1200px;
    height: 465px;
  }
  @media (max-width: 1260px) {
    width: 980px;
    height: 380px;
  }
  @media (max-width: 1040px) {
    width: 580px;
    height: 225px;
  }
`;

const ReleaseImgContainer = styled.div`
  position: relative;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 2;
  margin-right: 20px;
  @media (max-width: 1960px) {
    width: 1200px;
    height: auto;
  }
  @media (max-width: 1260px) {
    width: 980px;
    height: auto;
  }
  @media (max-width: 1040px) {
    width: 580px;
    height: auto;
  }
`;

const PlayIcon = styled.img`
  animation: fadeIn;
  animation-duration: 0.5s;
  margin-bottom: 25px;
  margin-right: 20px;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const WatchIcon = styled.img`
  animation: fadeIn;
  animation-duration: 0.5s;
  margin-bottom: 25px;
  margin-right: 20px;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const AddedIcon = styled.img`
  width: 64px;
  height: 62px;
  animation: fadeIn;
  animation-duration: 0.5s;
  margin-bottom: 30px;
  margin-right: 20px;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const ReleasesItems = ({ item }) => {
  const [added, setAdded] = useState(true);

  const handleClick = () => {
    setAdded(!added);
  };

  return (
    <ReleaseImgContainer>
      <Image src={item.img} alt={item.title} />
      <InfoContainer>
        <Link to={"/watch"}>
          <PlayIcon src={play} />
        </Link>
        {added ? (
          <AddedIcon onClick={handleClick} src={add} />
        ) : (
          <AddedIcon onClick={handleClick} src={addedicon} />
        )}
        <Link to={`/view/${item.title}`}>
          <WatchIcon src={watch} />
        </Link>
      </InfoContainer>
    </ReleaseImgContainer>
  );
};

export default ReleasesItems;
