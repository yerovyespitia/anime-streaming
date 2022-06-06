import React from "react"
import ReactPlayer from "react-player"
import video from "../img/header/video.mp4"
import logo from "../img/header/logo.png"
import "../styles/banner.css"

const Header = () => {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
          playsInline={true}
        />
        <div className="bannerContent">
          <a href="/view/Demon Slayer">
            <img id="bannerLogo" src={logo} alt="logo" />
          </a>
          <p className="bannerDesc">Demon Slayer Avaiable Now</p>
          <p className="bannerSchedule">New Episodes Every Friday</p>
        </div>
      </div>
    </div>
  )
}

export default Header
