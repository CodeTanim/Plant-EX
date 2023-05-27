import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import backgroundImage from "../assets/plant.jpg";
import "./pages.css";

const About = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="about-content" style={{ textAlign: "left" }}>
        <h1 className="about-title">About Our Plant Search Website</h1>
        <p className="about-paragraph">
          Our website is dedicated to helping you find and learn about different
          plants, whether you're an experienced gardener or just starting out.
          Using our search feature, you can easily find plants by name, or by
          browsing through our library of images. Each plant comes with a
          detailed description, including information on its origins, growth
          habits, and care instructions. Our mission is to help you connect with
          the natural world, and to inspire you to explore the beauty and
          diversity of plant life. Whether you're looking to create a new
          garden, add some greenery to your home, or just want to learn more
          about the plants around you, we're here to help.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
