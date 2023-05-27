import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import plantImage from "../assets/plant.jpg";
import { useLocation } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import "./Description.css";

const sampleCareDetails =
  "The Alpine rose should be planted in well-draining soil in a location that receives full sun. Water regularly, keeping the soil moist but not waterlogged. Mulch around the base of the plant to retain moisture and suppress weeds. Provide support for the plant if necessary, as it can become top-heavy. Prune in early spring to remove dead or damaged wood and shape the plant. Watch for pests such as aphids and spider mites, and treat with insecticidal soap if necessary. Diseases such as powdery mildew can be prevented by ensuring good air circulation around the plant. Harvest seeds in late summer or early fall when the seed pods have turned brown and are beginning to split open.";
const firebaseConfig = {
  apiKey: "AIzaSyAHL9eJk1bV0PvQ26TFXCLn-w8KKdXPI7Y",
  authDomain: "plantcareapp-9fa53.firebaseapp.com",
  projectId: "plantcareapp-9fa53",
  storageBucket: "plantcareapp-9fa53.appspot.com",
  messagingSenderId: "764829673512",
  appId: "1:764829673512:web:1ac26cb80b0e8b61892d1d",
  measurementId: "G-9Y0YEC03C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

const API_KEY = "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";

const DescriptionImage = () => {
  const location = useLocation();
  const plant = location.state.plant;
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const plantDocRef = doc(firestore, "plants", plant.id.toString());
        const plantDocSnap = await getDoc(plantDocRef);

        if (plantDocSnap.exists()) {
          // Plant exists in Firestore, so we can use this data
          console.log("found in database");
          setDescription(plantDocSnap.data().description);
        } else {
          // Plant does not exist in Firestore, so we need to fetch data from OpenAI API
          console.log("not found in database, storing new data");
          const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Please provide care instructions for the ${plant.common_name}, encompassing the following in a concise paragraph:
                Planting
                Watering
                Mulching
                Supporting
                Pruning
                Pest and disease management
                Harvesting seeds }`,
              },
            ],
            max_tokens: 500,
            temperature: 0.2,
          };

          const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: "Bearer " + API_KEY,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(apiRequestBody),
            }
          );

          const data = await response.json();
          // will change to data.choices[0].message.content.trim(); in final version
          const plantDescription = data.choices[0].message.content.trim();
          setDescription(plantDescription);

          // Save plant data in Firestore
          await setDoc(plantDocRef, {
            common_name: plant.common_name,
            scientific_name: plant.scientific_name,
            family_common_name: plant.family_common_name,
            image_url: plant.image_url,
            description: plantDescription,
          });
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, [plant.common_name]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <div className="description-container">
          <img src={plant.image_url} alt="plant" className="plant-image" />
          <div className="plant-details">
            <h2>Common Name: {plant.common_name}</h2>
            <h2>Scientific Name: {plant.scientific_name}</h2>
            <h2>Family: {plant.family_common_name}</h2>
            <h6>How to Take Care of {plant.common_name}:</h6>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionImage;
