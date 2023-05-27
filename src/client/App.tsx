import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PlantIdentification from "./PlantIdentification";
import Description from "./pages/Description";
import DescriptionImage from "./pages/DescriptionImage"; // import the component first

function App(): JSX.Element {
  const handleIdentify = (image: File) => {
    // Implement your plant identification logic here.
    console.log("Image submitted for identification:", image);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plant-identification" element={<PlantIdentification />} />
        <Route path="/description" element={<Description />} />
        <Route path="/descriptionImage" element={<DescriptionImage />} />
      </Routes>
    </Router>
  );
}

export default App;
