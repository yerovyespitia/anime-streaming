import React from "react"
import Category from "./Category"
import right from "../img/right.svg"

const Categories = (props) => {
  return (
    <div className="font-sans m-8 group">
      <h1 className="font-sf text-3xl font-bold text-[white] mb-5 cursor-pointer">
        {props.title}
        <span>
          <img
            className="group-hover:inline hidden w-5 ml-1 filter sepia-0 invert saturate-0 hue-rotate-[320deg] brightness-[102%] contrast-[101%]"
            src={right}
            alt="right"
          />
        </span>
      </h1>
      <div className="flex overflow-y-hidden scroll-smooth">
        {props.data.map((item, i) => (
          <Category item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Categories
