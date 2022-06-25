import React, { useState } from "react"

const Season = (seasons) => {
  const [ep] = useState(seasons.season)
  return (
    <>
      <div>
        <img
          className="w-[100%] cursor-pointer hover:opacity-50"
          src={ep.thumbnail}
          alt="episodes"
        />
        <p className="font-sf text-xl font-bold text-[white] p-0 mt-3 mb-0 tracking-wide">
          {ep.nameEp}
        </p>
        <p className="font-sf text-lg text-[#bbbbbb] mt-2 mb-0">{ep.time}</p>
      </div>
    </>
  )
}

export default Season
