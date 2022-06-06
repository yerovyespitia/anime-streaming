import React, { useEffect} from "react"
import Categories from "../../components/Categories/Categories"
import Banner from "../../components/Banner"
import Releases from "../../components/Releases/Releases"
import Trending from "../../components/Trending/Trending"
import { Helmet } from "react-helmet"
import { FallAnime, SpringAnime, WatchingAnime } from "../../data/data"

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
      <Categories title={"Continue watching"} data={WatchingAnime} />
      <Categories title={"Fall releases"} data={FallAnime} />
      <Releases />
      <Trending />
      <Categories title={"Spring releases"} data={SpringAnime} />
    </>
  )
}

export default Home
