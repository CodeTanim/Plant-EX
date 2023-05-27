import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Features = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>This is the Features page.</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
