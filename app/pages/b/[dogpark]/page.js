import rawParksData from "@/data/hundpark_data.json"

export default async function DogparkPage(props) {
  const { dogpark: encodedDogparkName } = await props.params
  const dogparkName = decodeURIComponent(encodedDogparkName)
  console.log(dogparkName)

  const foundPark = rawParksData.find((park) => {
    return Object.values(park).some((value) => {
      // Ensure value is a string before calling toLowerCase and includes
      return (
        typeof value === "string" &&
        value.toLowerCase().includes(dogparkName.toLowerCase())
      )
    })
  })

  if (!foundPark) {
    return (
      <main className="p-4">
        <h1>Dog park "{dogparkName}" not found</h1>
      </main>
    )
  }

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-6 m-auto text-center">
        {foundPark.name}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div>
          {foundPark.photo && (
            <div className="mb-6">
              <img
                src={foundPark.photo}
                alt={foundPark.name}
                className="max-w-md h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex-1">
            {foundPark.category && (
              <p>
                <strong>Kategori:</strong> {foundPark.category}
              </p>
            )}
            {foundPark.adress && (
              <p>
                <strong>Address:</strong> {foundPark.adress}
              </p>
            )}
            {foundPark.street && (
              <p>
                <strong>Gata:</strong> {foundPark.street}
              </p>
            )}
            {foundPark.city && (
              <p>
                <strong>Stad:</strong> {foundPark.city}
              </p>
            )}
            {foundPark.postal_code && (
              <p>
                <strong>Postnummer:</strong> {foundPark.postal_code}
              </p>
            )}
            {foundPark.latitude && (
              <p>
                <strong>Latitud:</strong> {foundPark.latitude}
              </p>
            )}
            {foundPark.longitude && (
              <p>
                <strong>Longitud:</strong> {foundPark.longitude}
              </p>
            )}
            {foundPark.rating && (
              <p>
                <strong>Betyg:</strong> {foundPark.rating}
              </p>
            )}
            {foundPark.reviews && (
              <p>
                <strong>Recensioner:</strong> {foundPark.reviews}
              </p>
            )}
          </div>
        </div>

        <div className="border border-black">
          <iframe
            src={
              foundPark.location_link.replace(
                "https://www.google.com/maps/place/",
                "https://www.google.com/maps/embed/v1/place?q="
              ) + "&key=YOUR_GOOGLE_MAPS_API_KEY"
            }
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
