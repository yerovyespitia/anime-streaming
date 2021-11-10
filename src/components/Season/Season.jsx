import React, { useState } from "react";
import styled from "styled-components";

const Episode = styled.div``;
const EpisodeImg = styled.img`
  width: 100%;
  cursor: pointer;
  &:hover {
    filter: grayscale(40%) opacity(80%);
  }
  @media only screen and (max-width: 800px) {
    &:hover {
      filter: 0;
    }
  }
`;

const EpisodeTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 0;
`;

const EpisodeTime = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  color: #bbbbbb;
  margin-top: 10px;
  margin-bottom: 0;
`;

const Season = (seasons) => {
  const [ep] = useState(seasons.season);
  console.log(ep);
  return (
    <>
      <Episode>
        <EpisodeImg src={ep.thumbnail} />
        <EpisodeTitle>{ep.nameEp}</EpisodeTitle>
        <EpisodeTime>{ep.time}</EpisodeTime>
      </Episode>
    </>
  );
};

export default Season;
