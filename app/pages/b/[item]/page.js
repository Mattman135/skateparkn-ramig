import fs from "fs"
import path from "path"
import config from "@/config"

export default async function ItemDetailPage(props) {
  const { item: encodedItemName } = await props.params
  const itemName = decodeURIComponent(encodedItemName)

  // Load data from data.json
  const dataPath = path.join(process.cwd(), "data", "data.json")
  const jsonData = fs.readFileSync(dataPath, "utf-8")
  const data = JSON.parse(jsonData)

  // Find the item by the detail route field (usually name)
  const detailRouteField = config.directory?.detailRouteField || "name"
  const foundItem = data.find((item) => {
    const routeValue = item[detailRouteField]
    if (!routeValue) return false
    return String(routeValue).toLowerCase() === itemName.toLowerCase()
  })

  if (!foundItem) {
    return (
      <main className="p-4">
        <h1>Item &quot;{itemName}&quot; not found</h1>
      </main>
    )
  }

  // Helper function to format field labels
  const formatLabel = (key) => {
    const labels = {
      name: "Namn",
      category: "Kategori",
      adress: "Adress",
      address: "Adress",
      street: "Gata",
      city: "Stad",
      postal_code: "Postnummer",
      latitude: "Latitud",
      longitude: "Longitud",
      rating: "Betyg",
      reviews: "Recensioner",
      photo: "Foto",
      location_link: "Platslänk",
    }
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1)
  }

  // Fields to exclude from display
  const excludeFields = ["photo", "location_link"]

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 m-auto text-center">
        {foundItem.name}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div>
          {foundItem.photo && (
            <div className="mb-6">
              <img
                src={foundItem.photo}
                alt={foundItem.name}
                className="max-w-md h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex-1 space-y-2">
            {Object.entries(foundItem)
              .filter(([key]) => !excludeFields.includes(key))
              .map(([key, value]) => {
                if (value === null || value === undefined || value === "") {
                  return null
                }
                return (
                  <p key={key}>
                    <strong>{formatLabel(key)}:</strong> {String(value)}
                  </p>
                )
              })}
          </div>
        </div>

        {foundItem.latitude && foundItem.longitude && (
          <div className="border border-base-300 rounded-lg overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${String(
                foundItem.latitude,
              ).replace(
                ",",
                ".",
              )},${String(foundItem.longitude).replace(",", ".")}&z=15&output=embed`}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </main>
  )
}
