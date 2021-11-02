import React from "react";
import Category from "../../components/Categories/Category";
import Heading from "../../components/Heading";
import Releases from "../../components/Releases/Releases";
import Trending from "../../components/Trending/Trending";
import { Helmet } from "react-helmet"
import {
  FallAnime,
  GoreAnime,
  ShonenAnime,
  SpringAnime,
  WatchingAnime,
} from "../../data/data";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Anime Streaming</title>
      </Helmet>
      <Heading />
      <Releases />
      <Trending />
      <Category title={"Continue Watching"} data={WatchingAnime} />
      <Category title={"Spring Releases"} data={SpringAnime} />
      <Category title={"Fall Releases"} data={FallAnime} />
      <Category title={"Shonen Jump"} data={ShonenAnime} />
      <Category title={"Gore"} data={GoreAnime} />
    </>
  );
};

export default Home;
