import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const AboutPage = () => {
  const handleEasterEgg = () => {
    alert("Surprise! This is your Easter Egg 🎉");
  };

  return (
    <MainLayout>
      <h1>About Page</h1>
      <p>
        <strong>App Name:</strong> To-Do App
      </p>
      <p>
        <strong>Developer:</strong>{" "}
        <span onClick={handleEasterEgg} style={{ color: "blue", cursor: "pointer" }}>
          Deepak Sharma
        </span>
      </p>
      <p>
        <strong>Date:</strong> {new Date().toLocaleDateString()}
      </p>
      <Link to="/">Go Back to Home</Link>
    </MainLayout>
  );
};

export default AboutPage;
