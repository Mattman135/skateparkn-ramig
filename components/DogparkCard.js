"use client"

import Link from "next/link"

const DogparkCard = ({ park }) => {
  const name = park["name"] || "Unknown Dog Park"
  const imageUrl = park["photo"]
  const address = park["adress"]
  return (
    <div className="card bg-base-100 w-96 shadow-sm group overflow-hidden">
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          src={imageUrl === "" ? null : imageUrl}
          alt="img"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name} hundrastgård</h2>
        <div className="card-actions justify-end">
          <Link
            href={`/pages/b/${encodeURIComponent(name)}`}
            className="text-blue-600 hover:underline"
          >
            {address}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DogparkCard
