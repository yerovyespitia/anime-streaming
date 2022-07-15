import React, { useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import Category from "./Category"
import right from "../img/right.svg"

const Categories = ({ title, data }) => {
  const rowRef = useRef()
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <div className="ml-4 font-sans h-50 space-y-0.5 md:space-y-2 mb-8">
      <h1 className="font-sf w-50 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
        <span>
          <img
            className="group-hover:inline hidden w-5 ml-1 filter sepia-0 invert saturate-0 hue-rotate-[320deg] brightness-[102%] contrast-[101%]"
            src={right}
            alt="right"
          />
        </span>
      </h1>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute stroke-white top-0 bottom-0 left-2 z-40 m-auto h-1/2 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll no-scrollbar md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {data.map((item, i) => (
            <Category item={item} key={i} />
          ))}
          <ChevronRightIcon
            className="absolute stroke-white top-0 bottom-0 right-2 z-40 m-auto h-1/2 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  )
}

export default Categories
