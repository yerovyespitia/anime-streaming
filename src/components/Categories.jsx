import React from "react"
import Category from "./Category"
import "../styles/categories.css"
import right from "../img/right.svg"

const Categories = (props) => {
  return (
    <div className="categories">
      <h1 className="categoriesTitle">
        {props.title}
        <span className="arrowContainer">
          <img className="arrowIcon" src={right} alt="right" />
        </span>
      </h1>
      <div className="categoriesImgContainer">
        {props.data.map((item, i) => (
          <Category item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Categories
