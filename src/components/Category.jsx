import React from "react"

const Category = ({ item }) => {
  return (
    <a
      className="w-[100%] relative cursor-pointer ml-2"
      href={`/view/${item.title}`}
    >
      <img
        className="w-[100%] hover:opacity-50"
        src={item.img}
        alt={item.title}
      />
    </a>
  )
}

export default Category
