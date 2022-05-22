import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 100vw;
  min-height: 538px;
  object-fit: cover;
  border-radius: 14px;
  &:hover {
    filter: grayscale(30%) opacity(85%);
  }
`;

const ReleasesItems = ({ item }) => {
  return (
    <>
      <Link to={`/view/${item.title}`}>
        <Image src={item.img} alt={item.title} />
      </Link>
    </>
  );
};

export default ReleasesItems;
