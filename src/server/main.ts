import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

/* TODO: Need to implement the GPT API 

Plan for plant word search:
1.  When using the search bar, if a name is a common name, display the first 3 choices to be able to click
2.  When using the search bar, if a name is a scientific name, display only one choice to be clicked and description displayed
--- all done up to here

3. when that button is clicked take the scientifc name from that object and pass it to the gpt api for more information, and 
   display all of the information on the description page. 
--done up to here

Plan for image search: 
1. when we use the image search, we get the scientific name and common name of the best search and pass those to the gpt api
2. then simply display the relevant info about the plant. 

*/

const app = express();
app.use(cors());

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// the endpoint for just the search api (trefle)
app.get("/search", async (req, res) => {
  const searchTerm = typeof req.query.term === "string" ? req.query.term : "";
  const TREFLE_API_KEY = "YUxv7QTfp0TboVgVoQ4BhCT_Mph9NygnQjDZFTRONeE";
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
