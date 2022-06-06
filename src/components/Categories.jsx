import React from "react"
import Category from "./Category"
import "../styles/categories.css"

const Categories = (props) => {
  return (
    <div className="categories">
      <h1 className="categoriesTitle">{props.title}</h1>
      <div className="categoriesImgContainer">
        {props.data.map((item, i) => (
          <Category item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Categories
