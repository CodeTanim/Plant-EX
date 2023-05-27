import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Card, ButtonBase } from "@material-ui/core";
import "./home.css";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div id="searchbox">
        <label htmlFor="search-input" style={{ display: "none" }}>
          Search:
        </label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleChange}
          name="search"
          placeholder="Type a plant name.."
        />
        <div id="searchButton">
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  image_url: string;
  family: string;
}

const Home = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [plantCardData, setPlantCardData] = useState<Plant[]>([]);
  const navigate = useNavigate();

  const handleSearch = async (searchTerm: string) => {
    setSearchPerformed(true); // Update state to show search has been performed
    // Perform search logic
    try {
      const response = await fetch(
        `http://localhost:3000/search?term=${encodeURIComponent(searchTerm)}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching plant data: ${response.statusText}`);
      }

      const plantData = await response.json();
      console.log(plantData);
      setPlantCardData(plantData.data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
  };
  const handleCardClick = (plant: Plant) => {
    // when you go to description page make sure to store plant details in DB.

    navigate("/description", { state: { plant } });
  };
  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <section>
        {searchPerformed && <h1 className="title">Top Results: </h1>}
        {searchPerformed && plantCardData.length >= 1 && (
          <div className="card-container">
            <ButtonBase onClick={() => handleCardClick(plantCardData[0])}>
              <Card>
                <div className="CardHeader">
                  {plantCardData[0]?.common_name}
                </div>
                <div className="CardContent">
                  <img
                    src={plantCardData[0]?.image_url}
                    alt={plantCardData[0]?.common_name}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <p>{plantCardData[0]?.scientific_name}</p>
                </div>
              </Card>
            </ButtonBase>
            <ButtonBase onClick={() => handleCardClick(plantCardData[1])}>
              <Card>
                <div className="CardHeader">
                  {plantCardData[1]?.common_name}
                </div>
                <div className="CardContent">
                  <img
                    src={plantCardData[1]?.image_url}
                    alt={plantCardData[1]?.common_name}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <p>{plantCardData[1]?.scientific_name}</p>
                </div>
              </Card>
            </ButtonBase>
            <ButtonBase onClick={() => handleCardClick(plantCardData[2])}>
              <Card>
                <div className="CardHeader">
                  {plantCardData[2]?.common_name}
                </div>
                <div className="CardContent">
                  <img
                    src={plantCardData[2]?.image_url}
                    alt={plantCardData[2]?.common_name}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <p>{plantCardData[2]?.scientific_name}</p>
                </div>
              </Card>
            </ButtonBase>
            <ButtonBase onClick={() => handleCardClick(plantCardData[3])}>
              <Card>
                <div className="CardHeader">
                  {plantCardData[3]?.common_name}
                </div>
                <div className="CardContent">
                  <img
                    src={plantCardData[3]?.image_url}
                    alt={plantCardData[3]?.common_name}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <p>{plantCardData[3]?.scientific_name}</p>
                </div>
              </Card>
            </ButtonBase>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
