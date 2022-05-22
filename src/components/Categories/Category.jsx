import React, { useRef } from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
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

const Container = styled.div`
  margin: 50px 0 50px 50px;
  &:hover ${RightButton} {
    display: flex;
  }
  &:hover ${LeftButton} {
    display: flex;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "SF Pro Display", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  @media only screen and (max-device-width: 540px) {
    display: none;
  }
`;

const Category = (props) => {
  const listRef = useRef();

  const moveToRight = () => {
    listRef.current.scrollLeft += 550;
  };

  const moveToLeft = () => {
    listRef.current.scrollLeft -= 550;
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
        <ButtonsContainer>
          <RightButton onClick={moveToRight} src={right} />
          <LeftButton onClick={moveToLeft} src={left} />
        </ButtonsContainer>
      </TitleContainer>
      <ImagesContainer ref={listRef}>
        {props.data.map((item, i) => (
          <CategoryItems item={item} key={i} />
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default Category;
