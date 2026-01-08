import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city") || "";

    const dataPath = path.join(process.cwd(), "data", "hundpark_data.json");
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const hundpark_data = JSON.parse(jsonData);

    const searchTerm = city.toLowerCase();
    const filteredDogparks = hundpark_data.filter((dogpark) =>
      dogpark.city.toLowerCase().includes(searchTerm)
    );

    const allCities = [...new Set(hundpark_data.map((dogpark) => dogpark.city))];
    const suggestions = allCities.filter((cityName) =>
      cityName.toLowerCase().includes(searchTerm)
    ).slice(0, 5); // Limit to 5 suggestions

    return NextResponse.json({ dogparks: filteredDogparks, suggestions });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
