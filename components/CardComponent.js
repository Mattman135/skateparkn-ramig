"use client"

import Link from "next/link"
import Image from "next/image"

const CardComponent = ({ item }) => {
  // Basic fields
  const name = item["title"] ?? item["name"] ?? "Missing name"
  const imageUrl = "/icon lorem ipsum.jpg" // keep your existing placeholder
  const category = item["category"] ?? "Missing category"

  // Rating fields
  const totalScore =
    typeof item["totalScore"] === "number" ? item["totalScore"] : 0
  const reviewsCount =
    typeof item["reviewsCount"] === "number" ? item["reviewsCount"] : 0

  const filledStars = Math.max(0, Math.min(5, Math.round(totalScore)))

  // Address line: street, city, state, countryCode, adress
  const fullAddress = [
    item["street"],
    item["city"],
    item["state"],
    item["countryCode"],
    item["adress"],
  ]
    .filter(Boolean)
    .join(", ")

  // Detail route: use name/title for the detail page slug
  const detailKey = item["name"] ?? item["title"] ?? name

  return (
    <div className="card bg-base-100 w-96 shadow-sm group overflow-hidden items-center">
      {imageUrl && (
        <figure className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
      )}

      <div className="card-body w-full max-w-full overflow-hidden">
        <h2 className="card-title font-bold text-lg leading-tight break-words">
          {name}
        </h2>

        {category && (
          <p className="text-sm text-base-content/60 break-words">{category}</p>
        )}

        {/* Rating: stars + (reviewsCount) */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index < Math.floor(filledStars)
              const partial = !filled && index < filledStars
              const pct = partial
                ? Math.round((filledStars - Math.floor(filledStars)) * 100)
                : 0

              return (
                <span key={index} className="relative inline-block w-4 h-4">
                  {/* Background (empty) star */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-base-300"
                    fill="currentColor"
                  >
                    <path d="M12 2l2.9 6.26L22 9.27l-5 5.14 1.18 7.09L12 18.77l-6.18 2.73L7 14.41 2 9.27l7.1-1.01L12 2z" />
                  </svg>

                  {/* Filled overlay */}
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      width: filled ? "100%" : partial ? `${pct}%` : "0%",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.9 6.26L22 9.27l-5 5.14 1.18 7.09L12 18.77l-6.18 2.73L7 14.41 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                  </span>
                </span>
              )
            })}
          </div>

          <span className="text-xs font-semibold text-base-content/80 leading-none">
            {filledStars.toFixed(1)}
          </span>
          <span className="text-xs text-base-content/50 leading-none">
            ({reviewsCount.toLocaleString()})
          </span>
        </div>

        {fullAddress && (
          <p className="text-sm text-base-content/80 mt-2 break-words">
            {fullAddress}
          </p>
        )}

        {/* Button aligned to the right */}
        <div className="card-actions justify-end mt-4">
          <Link
            href={`/pages/b/${encodeURIComponent(detailKey)}`}
            className="btn btn-sm btn-primary rounded-full"
          >
            Visa
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
