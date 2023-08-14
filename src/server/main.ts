import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import config from "./config"

const app = express();
app.use(cors());

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// the endpoint for just the search api (trefle)
app.get("/search", async (req, res) => {
  const searchTerm = typeof req.query.term === "string" ? req.query.term : "";
  const TREFLE_API_KEY = config.trefle_api;
  const TREFLE_API_BASE_URL = "https://trefle.io/api/v1";

  try {
    const response = await fetch(
      `${TREFLE_API_BASE_URL}/plants/search?token=${TREFLE_API_KEY}&q=${encodeURIComponent(
        searchTerm
      )}&best_match=true`
    );

    if (!response.ok) {
      throw new Error(`Error fetching plant data: ${response.statusText}`);
    }

    const plantData = await response.json();

    console.log("Plant data from Trefle API:", plantData);

    // Send plant data to the frontend
    res.json(plantData);
  } catch (error) {
    console.error("Error fetching plant data:", error);
    res.status(500).json({ message: "Error fetching plant data" });
  }
});
