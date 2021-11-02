import React from "react";
import List from "../../components/List";
import { SpringView } from "../../data/data";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

const Container = styled.div`
  margin: 120px 60px 20px 60px;
`;
const Title = styled.h2`
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(349px, 1fr));
  gap: 20px;
`;

const ListContainer = (props) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <>
      <Helmet>
        <title>{path.charAt(0).toUpperCase() + path.slice(1)} Animes</title>
      </Helmet>
      <Container>
        <Title>{props.title}</Title>
        <GridContainer>
          {SpringView.map((item, i) => (
            <List item={item} key={i} />
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default ListContainer;
