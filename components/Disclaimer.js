const Disclaimer = () => {
  return (
    <section
      className="mt-8"
      style={{
        backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 8px,
        rgba(239, 68, 68, 0.15) 8px,
        rgba(239, 68, 68, 0.15) 16px
      )`,
        backgroundColor: "rgba(254, 242, 242, 1)",
      }}
    >
      <div className="rounded-2xl border border-base-300 bg-base-200/60 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-warning/10 text-warning">
            <span className="text-lg">🚧</span>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-base md:text-lg font-semibold tracking-tight text-base-content">
              Under uppbyggnad
            </h2>

            <p className="text-base-content/80">
              Den här webbkatalogen är under utveckling. Innehåll, struktur och
              rekommendationer kan ändras över tid.
            </p>

            <p className="text-base-content/80">
              Syftet med webbkatalogen är kuration, att samla den mest
              relevanta, användbara och värdefulla informationen på ett och
              samma ställe, så att du slipper leta själv.
            </p>

            <p className="text-base-content/80">
              Istället för att lista allt, lyfts enbart det fram som faktiskt är
              relevant och intressant för dig, så att du sparar tid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer
