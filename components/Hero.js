import Image from "next/image"
import TestimonialsAvatars from "./TestimonialsAvatars"
import config from "@/config"

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start backgroundcolor">
        <div>
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 mb-4">
            Hitta Hundrastgårdar <br></br> nära dig
          </h1>
        </div>
        <div className="max-w-100">
          Välkommen till den ultimata hundrastgårdkatalogen! Oavsett om du är en
          hängiven hundägare som söker ett nytt äventyr eller en hundentusiast
          som letar efter den perfekta lekplatsen, har du kommit rätt.
        </div>

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
          <input type="search" required placeholder="Sök" />
        </label>
      </div>
    </section>
  )
}

export default Hero
