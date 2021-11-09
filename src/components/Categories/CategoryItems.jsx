import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "animate.css";

import play from "../../img/header/info-play-icon.png";
import add from "../../img/header/add-icon.png";
import addedicon from "../../img/header/added-icon.png";
import watch from "../../img/watch-icon.png";

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 23vw;
  min-width: 325px;
  height: 98.8%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 3;
  @media only screen and (max-device-width: 730px) {
    background-color: transparent;
    opacity: 1;
  }
`;

const CategoryImgContainer = styled.div`
  position: relative;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.01);
  }
  @media only screen and (max-device-width: 730px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

const Image = styled.img`
  width: 23vw;
  min-width: 325px;
  position: relative;
  z-index: 2;
  margin-right: 20px;
  @media only screen and (max-device-width: 730px) {
    filter: grayscale(30%) opacity(85%);
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

const CategoryItems = ({ item }) => {
  const [added, setAdded] = useState(true);

  const handleClick = () => {
    setAdded(!added);
  };

  return (
    <CategoryImgContainer>
      <Image src={item.img} alt={item.title} />
      <InfoContainer>
        <Link to={`/watch/${item.title}`}>
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
    </CategoryImgContainer>
  );
};

export default CategoryItems;
