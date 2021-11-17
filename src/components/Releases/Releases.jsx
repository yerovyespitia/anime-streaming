import React from "react";
import styled from "styled-components";
import ReleasesItems from "./ReleasesItems";
import { AnimeReleases } from "../../data/data";

const Container = styled.div`
  margin: 50px 0;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "SF Pro Display", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Releases = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Today releases</Title>
      </TitleContainer>
      <ImagesContainer>
        {AnimeReleases.map((item, i) => (
          <ReleasesItems item={item} key={i} />
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default Releases;
