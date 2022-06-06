import React, { useEffect } from "react"
import Categories from "../../components/Categories"
import Banner from "../../components/Banner"
import { Helmet } from "react-helmet"
import {
  FallAnime,
  SpringAnime,
  WatchingAnime,
  AnimeReleases,
  AnimeTrending,
} from "../../data/data"

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
      <Categories title={"Continue Watching"} data={WatchingAnime} />
      <Categories title={"Fall Releases"} data={FallAnime} />
      <Categories title={"Today Releases"} data={AnimeReleases} />
      <Categories title={"Trending Now"} data={AnimeTrending} />
      <Categories title={"Spring releases"} data={SpringAnime} />
    </>
  )
}

export default Home
