import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router";
import Season from "./Season";

const SeasonsContainer = styled.div`
  margin: 20px;
`;
const SeasonsTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
`;
const Episodes = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  gap: 40px 20px;
`;

const SeasonContainer = () => {
  const [seasons, setSeasons] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://anime-streaming-app-api.herokuapp.com/api/season/${path}`)
      .then((res) => setSeasons(res.data.episodes));
  }, [path]);

  return (
    <>
      <SeasonsContainer>
        <SeasonsTitle>Season 1</SeasonsTitle>
        <Episodes>
          {seasons.map((s, i) => (
            <Season season={s} key={i} />
          ))}
        </Episodes>
      </SeasonsContainer>
    </>
  );
};

export default SeasonContainer;
