import React from "react"
import Category from "../../components/Categories/Category"
import Banner from "../../components/Banner"
import Releases from "../../components/Releases/Releases"
import Trending from "../../components/Trending/Trending"
import { Helmet } from "react-helmet"
import { FallAnime, SpringAnime, WatchingAnime } from "../../data/data"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Anime Streaming</title>
      </Helmet>
      <Banner />
      <Releases />
      <Trending />
      <Category title={"Continue watching"} data={WatchingAnime} />
      <Category title={"Spring releases"} data={SpringAnime} />
      <Category title={"Fall releases"} data={FallAnime} />
    </>
  )
}

export default Home
