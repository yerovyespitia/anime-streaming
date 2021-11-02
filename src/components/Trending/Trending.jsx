import React, { useRef } from "react";
import styled from "styled-components";
import TrendingItems from "./TrendingItems";
import { AnimeTrendy } from "../../data/data";
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

const TrendingNow = styled.div`
  margin-left: 20px;
  &:hover ${RightButton} {
    display: flex;
  }
  &:hover ${LeftButton} {
    display: flex;
  }
`;

const Trendy = styled.div`
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

const Trending = () => {

  const listRef = useRef();

  const moveToRight = () => {
    listRef.current.scrollLeft += 550;
  };

  const moveToLeft = () => {
    listRef.current.scrollLeft -= 550;
  };

  return (
    <TrendingNow>
      <TitleContainer>
        <Title>Trending Now</Title>
        <ButtonsContainer>
          <RightButton onClick={moveToRight} src={right} />
          <LeftButton onClick={moveToLeft} src={left} />
        </ButtonsContainer>
      </TitleContainer>
      <Trendy ref={listRef}>
        {AnimeTrendy.map((item, i) => (
          <TrendingItems item={item} key={i} />
        ))}
      </Trendy>
    </TrendingNow>
  );
};

export default Trending;
