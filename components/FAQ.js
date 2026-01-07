"use client"

import { useRef, useState } from "react"

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Vad ska jag leta efter i en hundvänlig park?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        När du söker efter en hundvänlig park är det viktigt att ta hänsyn till
        flera faktorer för att säkerställa en trygg och trevlig upplevelse för
        både dig och din fyrbenta vän. För det första, leta efter parker med
        säkra stängsel, vilket förhindrar att hundar springer iväg och erbjuder
        en säker miljö utan koppel. Dessutom bör du uppmärksamma bekvämligheter
        som vattenstationer, soptunnor för avfall och skuggiga områden, vilket
        kan förbättra komforten under ditt besök. Det är också fördelaktigt att
        läsa recensioner från andra besökare, eftersom detta kan ge dig insikter
        om parkens renlighet, säkerhetsåtgärder och allmänna atmosfär. Genom att
        ta hänsyn till dessa aspekter kan du hitta en hundvänlig park som passar
        både dina och din hundens behov.
      </p>
    ),
  },
  {
    question: "Hur hittar jag en hundrastgård nära mig?",
    answer: (
      <p>
        Att hitta en hundpark i närheten är enkelt med vår användarvänliga
        webbplats. Använd helt enkelt vår interaktiva kartfunktion genom att
        ange din stad eller ditt postnummer, så får du en lista över hundparker
        i ditt område, bekvämt sorterade efter närhet och användarrecensioner.
        För att begränsa din sökning ytterligare kan du använda våra
        filtreringsalternativ för att välja parker med specifika funktioner,
        såsom storlek, agility-utrustning eller särskilda evenemang. Oavsett om
        du befinner dig i en livlig stad eller i en mer lantlig miljö, kommer
        vår katalog att hjälpa dig att hitta den perfekta hundparken för dina
        äventyr.
      </p>
    ),
  },
  {
    question: "Finns det några regler och etikett jag bör följa på hundparker?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Visst, att följa regler och utöva god etikett är avgörande när du
        besöker hundparker för att säkerställa en harmonisk och säker miljö för
        alla besökare. Till att börja med ska du alltid ha din hund kopplad när
        du går in i och ut ur parken. Väl inne är det viktigt att vara medveten
        om och följa parkens regler, inklusive eventuella vaccinationskrav och
        riktlinjer gällande hundens beteende. Ansvarsfullt ägande innebär även
        att snabbt plocka upp efter din hund och kasta avfallet i
        tillhandahållna soptunnor. Slutligen är det väsentligt att övervaka din
        hunds interaktioner med andra hundar för att förhindra konflikter och
        upprätthålla en positiv upplevelse för alla. Genom att följa dessa
        riktlinjer bidrar du till en välkomnande och trevlig atmosfär på
        hundparken.
      </p>
    ),
  },
  {
    question: "Hur kan jag bidra till hundparksgemenskapen?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Att bidra till hundparksgemenskapen är inte bara en givande upplevelse
        utan också ett utmärkt sätt att stödja andra hundälskare och förbättra
        dina lokala hundparker. Du kan aktivt delta genom att dela dina
        erfarenheter via recensioner och betyg för de parker du besöker. Genom
        att göra detta ger du värdefulla insikter till andra som letar efter den
        perfekta platsen. Dessutom kan du överväga att rekommendera parker till
        vänner och andra hundentusiaster baserat på dina positiva upplevelser,
        vilket uppmuntrar fler människor att utforska dessa hundvänliga platser.
        Att hålla dig informerad om lokala hundparksevenemang, insamlingar och
        volontärmöjligheter är ett annat sätt att göra en positiv insats och
        hjälpa till att underhålla dessa uppskattade samhällstillgångar. Ditt
        engagemang säkerställer den fortsatta framgången och glädjen av
        hundparker i ditt område.
      </p>
    ),
  },
]

const Item = ({ item }) => {
  const accordion = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Vanliga frågor och svar
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
