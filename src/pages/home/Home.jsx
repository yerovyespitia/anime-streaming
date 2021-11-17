import React from "react";
import Category from "../../components/Categories/Category";
import Header from "../../components/Header";
import Releases from "../../components/Releases/Releases";
import Trending from "../../components/Trending/Trending";
import { Helmet } from "react-helmet";
import { FallAnime, SpringAnime, WatchingAnime } from "../../data/data";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Anime Streaming</title>
      </Helmet>
      <Header />
      <Releases />
      <Trending />
      <Category title={"Continue Watching"} data={WatchingAnime} />
      <Category title={"Spring Releases"} data={SpringAnime} />
      <Category title={"Fall Releases"} data={FallAnime} />
    </>
  );
};

export default Home;
