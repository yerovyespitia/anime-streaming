import React, { useRef } from "react";
import styled from "styled-components";
import ReleasesItems from "./ReleasesItems";
import { AnimeReleases } from "../../data/data";
import right from "../../img/right-icon.png";
import left from "../../img/left-icon.png";

const RightButton = styled.img`
  width: 40px;
  height: 30px;
  margin-right: 40px;
  margin-left: 20px;
  cursor: pointer;
  display: none;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const LeftButton = styled.img`
  width: 40px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  display: none;
  &:hover {
    filter: grayscale(70%) opacity(70%);
  }
`;

const TodayReleases = styled.div`
  margin-left: 20px;
  &:hover ${RightButton} {
    display: flex;
  }
  &:hover ${LeftButton} {
    display: flex;
  }
`;

const Release = styled.div`
  display: flex;
  overflow-y: hidden;
  padding: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "SF Pro", Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: white;
  padding-left: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.div``;

const Releases = () => {

  const desktop = window.innerWidth;
  const listRef = useRef();

  const moveToRight = () => {
    if (desktop > 1960) {
      listRef.current.scrollLeft += 1780;
    } else if (desktop > 1260) {
      listRef.current.scrollLeft += 980;
    } else if (desktop > 1040) {
      listRef.current.scrollLeft += 1080;
    } else if (desktop > 0) {
      listRef.current.scrollLeft += 640;
    }
  };

  const moveToLeft = () => {
    if (desktop > 1960) {
      listRef.current.scrollLeft -= 1780;
    } else if (desktop > 1260) {
      listRef.current.scrollLeft -= 980;
    } else if (desktop > 1040) {
      listRef.current.scrollLeft -= 1080;
    } else if (desktop > 0) {
      listRef.current.scrollLeft -= 640;
    }
  };

  return (
    <TodayReleases>
      <TitleContainer>
        <Title>Today Releases</Title>
        <ButtonsContainer>
          <RightButton onClick={moveToRight} src={right} />
          <LeftButton onClick={moveToLeft} src={left} />
        </ButtonsContainer>
      </TitleContainer>
      <Release ref={listRef}>
        {AnimeReleases.map((item, i) => (
          <ReleasesItems item={item} key={i} />
        ))}
      </Release>
    </TodayReleases>
  );
};

export default Releases;
