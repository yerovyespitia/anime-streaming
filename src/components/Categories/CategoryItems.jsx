import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  &:hover {
    filter: grayscale(30%) opacity(85%);
  }
  @media only screen and (max-device-width: 508px) {
    width: 330px;
  }
`

const NavLink = styled(Link)`
  width: 100%;
  &:not(:last-child) {
    margin-right: 5px;
  }
  cursor: pointer;
`

const CategoryItems = ({ item }) => {
  return (
    <>
      <NavLink to={`/view/${item.title}`}>
        <Image src={item.img} alt={item.title} />
      </NavLink>
    </>
  )
}

export default CategoryItems
