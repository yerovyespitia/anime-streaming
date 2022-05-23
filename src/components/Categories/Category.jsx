import React from "react"
import styled from "styled-components"
import CategoryItems from "./CategoryItems"

const Container = styled.div`
  margin: 30px;
  @media only screen and (max-device-width: 508px) {
    margin: 10px;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Title = styled.h1`
  font-family: "SF Pro Display", Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: white;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Category = (props) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ImagesContainer>
        {props.data.map((item, i) => (
          <CategoryItems item={item} key={i} />
        ))}
      </ImagesContainer>
    </Container>
  )
}

export default Category
