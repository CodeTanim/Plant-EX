import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ButtonBase, Card } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface Plant {
  id: number;
  scientific_name: string;
  common_name: string;
  family_common_name: string;
  image_url: string;
}

const PlantIdentification: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [plantData, setPlantData] = useState<Plant | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };
  const trefleCall = async (scientific_name: string) => {
    // now use the trefle api to get the id
    try {
      const response = await fetch(
        `http://localhost:3000/search?term=${encodeURIComponent(
          scientific_name
        )}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching plant data: ${response.statusText}`);
      }

      const plantData2 = await response.json();
      console.log(plantData2.data[0].id);
      return plantData2.data[0];
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
  };

  const handleSubmit = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("images", selectedImage);
      formData.append("organs", "auto");

      const PLANTNET_API_KEY = "2b10tN1k7Vuo12XuWb9IyR3pe";
      const PLANTNET_API_URL = `https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=${PLANTNET_API_KEY}`;

      try {
        const response = await axios.post(PLANTNET_API_URL, formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        });

        const plantData = response.data;
        const scientific_name =
          plantData.results[0].species.scientificNameWithoutAuthor;
        const plantTrefle = await trefleCall(scientific_name);

        const plant_id = plantTrefle.id;
        const image = plantTrefle.image_url;
        const family_common_name = plantTrefle.family;

        const transformedPlantData: Plant = {
          id: plant_id,
          scientific_name: scientific_name,
          common_name: plantData.results[0].species.commonNames[0],
          family_common_name: family_common_name,
          image_url: image,
        };

        setPlantData(transformedPlantData);
      } catch (error) {
        console.error("Error identifying plant:", error);
      }
    }
  };

  const handleCardClick = (plant: Plant) => {
    console.log(plant.id);
    navigate("/descriptionImage", { state: { plant } });
  };

  return (
    <div>
      <Navbar />
      <div className="plant-identification">
        <h1>Search Plants By Image!</h1>
        <label htmlFor="plant-input-box">Select an image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          id="plant-input-box"
        />

        <button className="identify-button" onClick={handleSubmit}>
          Identify
        </button>
      </div>
      {plantData && (
        <ButtonBase className="base" onClick={() => handleCardClick(plantData)}>
          <Card>
            <div className="Header">{plantData.common_name}</div>
            <div className="Content">
              <img
                src={plantData.image_url}
                alt={plantData.common_name}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "100px",
                  height: "100px",
                }}
              />
              <p>{plantData.scientific_name}</p>
            </div>
          </Card>
        </ButtonBase>
      )}
    </div>
  );
};

export default PlantIdentification;
