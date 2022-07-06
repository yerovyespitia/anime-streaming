import React from "react"

const Trending = ({ item }) => {
  return (
    <div className="relative h-full hover:opacity-50 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105">
      <a href={`/view/${item.title}`}>
        <img className="object-cover" src={item.img} alt={item.title} />
      </a>
    </div>
  )
}

export default Trending
