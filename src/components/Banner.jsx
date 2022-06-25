import React from "react"
import ReactPlayer from "react-player"
import video from "../img/header/video.mp4"
import logo from "../img/header/logo.png"
import "../styles/banner.css"

const Header = () => {
  return (
    <div className="relative m-[30px]">
      <ReactPlayer
        url={video}
        playing={true}
        muted={true}
        width="100%"
        height="100%"
        loop={true}
        playsInline={true}
      />
      <div className="absolute top-0 bottom-[12%] left-[4%] w-[36%] 2xl:w-[25%] flex flex-col justify-end">
        <a href="/view/Demon Slayer">
          <img className="w-[55%] cursor-pointer" src={logo} alt="logo" />
        </a>
        <p className="font-hel text-xl font-bold text-[white] mt-5 mb-0 lg:text-2xl">
          Demon Slayer Available Now
        </p>
        <p className="font-hel text-base text-[#bfbfbf] lg:text-lg">
          New Episodes Every Friday
        </p>
      </div>
    </div>
  )
}

export default Header
