import React from "react"
import "../styles/categories.css"
import info from "../img/info.svg"

const Category = ({ item }) => {
  return (
    <a className="categoryLink" href={`/view/${item.title}`}>
      <img className="categoryImg" src={item.img} alt={item.title} />
      <div className="infoContainer">
        <img className="infoIcon" src={info} alt="info" />
      </div>
    </a>
  )
}

export default Category
