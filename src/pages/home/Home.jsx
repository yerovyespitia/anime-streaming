import React, { useEffect } from "react"
import Categories from "../../components/Categories"
import Banner from "../../components/Banner"
import { Helmet } from "react-helmet"
import { FallAnime, SpringAnime, TrendingAnime } from "../../data/data"
import TrendingContainer from "../../components/TrendingContainer"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Anime Streaming</title>
      </Helmet>
      <Banner />
      <Categories title={"Fall Releases"} data={FallAnime} />
      <TrendingContainer title={"Trending Now"} data={TrendingAnime} />
      <Categories title={"Spring releases"} data={SpringAnime} />
    </>
  )
}

export default Home
