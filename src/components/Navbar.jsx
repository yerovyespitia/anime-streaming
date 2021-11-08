import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  justify-content: center;
  height: 70px;
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
    &:first-child {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
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
          <Link to={"/"}>List</Link>
        </List>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
