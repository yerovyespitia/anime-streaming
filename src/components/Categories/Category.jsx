import React from "react"
import "../../styles/categories.css"

const Category = ({ item }) => {
  return (
    <a className="categoryLink" href={`/view/${item.title}`}>
      <img className="categoryImg" src={item.img} alt={item.title} />
    </a>
  )
}

export default Category
