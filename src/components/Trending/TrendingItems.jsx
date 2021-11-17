import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  margin-right: 15px;
  &:hover {
    filter: grayscale(30%) opacity(85%);
  }
  @media only screen and (max-device-width: 508px) {
    width: 330px;
  }
`;

const TrendingItems = ({ item }) => {
  return (
    <>
      <Link to={`/view/${item.title}`}>
        <Image src={item.img} alt={item.title} />
      </Link>
    </>
  );
};

export default TrendingItems;
