"use client"

import { useState } from "react"
import DogparkCard from "@/components/DogparkCard"

const CardsSection = ({ dogparks }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 9

  const dataToDisplay = dogparks.length > 0 ? dogparks : [];

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = dataToDisplay.slice(indexOfFirstCard, indexOfLastCard)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const totalPages = Math.ceil(dataToDisplay.length / cardsPerPage)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-base-200">
      {currentCards.map((park, index) => {
        return <DogparkCard key={index} park={park} />
      })}
      <div className="flex justify-center mt-8 col-span-full gap-4">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="flex items-center text-lg font-semibold">
          Sida {dataToDisplay.length === 0 ? 0 : currentPage} av {totalPages}
        </span>
      </div>
    </section>
  )
}

export default CardsSection
