"use client"
import { useState, useEffect } from "react"
import CardsSection from "./CardsSection"

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [filteredDogparks, setFilteredDogparks] = useState([])

  useEffect(() => {
    // Fetch all dog parks on initial load
    fetch(`/api/dogparks/search?city=`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredDogparks(data.dogparks)
      })
  }, []) // Empty dependency array means this runs once on mount

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        fetch(`/api/dogparks/search?city=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => {
            setFilteredDogparks(data.dogparks)
            setSuggestions(data.suggestions)
          })
      } else {
        // Fetch all dog parks when search term is empty
        fetch(`/api/dogparks/search?city=`) // Empty city param to get all
          .then((res) => res.json())
          .then((data) => {
            setFilteredDogparks(data.dogparks)
            setSuggestions([]) // Clear suggestions when displaying all parks
          })
      }
    }, 300) // 300ms debounce

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion)
    setSuggestions([]) // Clear suggestions after clicking one
  }

  return (
    <>
      <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start backgroundcolor">
          <div>
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 mb-4">
              Hitta Hundrastgårdar <br></br> nära dig
            </h1>
          </div>
          <div className="max-w-100">
            Välkommen till en svensk hundrastgårdkatalog. Oavsett om du är en
            hängiven hundägare som söker ett nytt äventyr eller en hundentusiast
            som letar efter den perfekta lhundrastgården, har du kommit rätt.
          </div>
          <div className="relative w-full max-w-xs">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Sök på stad eller kommun"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </label>
            {suggestions.length > 0 && (
              <ul className="bg-base-200 rounded-box p-2 shadow-lg w-full max-w-xs absolute top-full left-0 z-10">
                {suggestions.map((suggestion) => (
                  <li key={suggestion}>
                    <button
                      className="btn btn-ghost w-full justify-start"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>{" "}
        </div>
      </section>
      <CardsSection dogparks={filteredDogparks} />
    </>
  )
}

export default Hero
