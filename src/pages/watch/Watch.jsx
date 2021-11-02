import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const WatchContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Watch = () => {
  return (
    <WatchContainer>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=Bw-5Lka7gPE"}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
      />
    </WatchContainer>
  );
};

export default Watch;
