import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageContainer = styled.div``;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  &:hover {
    filter: grayscale(40%) opacity(80%);
  }
`;

const List = ({ item }) => {
  return (
    <ImageContainer>
      <Link to={`/view/${item.title}`}>
        <Image src={item.img} alt={item.title} />
      </Link>
    </ImageContainer>
  );
};

export default List;
