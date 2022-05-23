import React from "react"
import styled from "styled-components"
import TrendingItems from "./TrendingItems"
import { AnimeTrending } from "../../data/data"

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
  font-weight: 600;
  font-size: 30px;
  color: white;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Trending = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Trending now</Title>
      </TitleContainer>
      <ImagesContainer>
        {AnimeTrending.map((item, i) => (
          <TrendingItems item={item} key={i} />
        ))}
      </ImagesContainer>
    </Container>
  )
}

export default Trending
