import React from "react"
import styled from "styled-components"
import ReleasesItems from "./ReleasesItems"
import { AnimeReleases } from "../../data/data"

const Container = styled.div`
  margin: 30px;
`

const ImagesContainer = styled.div`
  overflow-y: hidden;
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
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
`

const Releases = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Today releases</Title>
      </TitleContainer>
      <ImagesContainer>
        {AnimeReleases.map((item, i) => (
          <ReleasesItems item={item} key={i} />
        ))}
      </ImagesContainer>
    </Container>
  )
}

export default Releases
