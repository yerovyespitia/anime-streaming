import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import search from "../img/header-imgs/search-icon.png";
import bell from "../img/header-imgs/bell-icon.png";
import photo from "../img/header-imgs/photo-icon.png";
import expand from "../img/header-imgs/photo-expand-icon.png";

const NavbarContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  position: absolute;
  top: 0;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
`;

const Container = styled.div`
  padding: 0px 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 900;
  margin-right: 20px;
  cursor: pointer;
  a {
    background-color: #00000089;
    padding: 20px 60px;
    border-radius: 55px;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  @media (max-width: 1240px) {
    &:last-child {
      display: none;
    }
  }
  @media (max-width: 1090px) {
    &:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 870px) {
    &:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 680px) {
    &:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 470px) {
    &:first-child {
      display: none;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  margin-right: 20px;
`;
const BellIcon = styled.img`
  margin-right: 20px;
`;
const PhotoIcon = styled.img`
  margin-right: 20px;
`;
const PhotoExpandIcon = styled.img``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <Left>
          <List>
            <Link to={"/"}>Home</Link>
          </List>
          <List>
            <Link to={"/spring"}>Spring</Link>
          </List>
          <List>
            <Link to={"/fall"}>Fall</Link>
          </List>
          <List>
            <Link to={"/popular"}>Popular</Link>
          </List>
          <List>
            <Link to={"/"}>List</Link>
          </List>
        </Left>
        <Right>
          <SearchIcon src={search} />
          <BellIcon src={bell} />
          <PhotoIcon src={photo} />
          <PhotoExpandIcon src={expand} />
        </Right>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
