import React from "react";
import { Stack, Button } from "@mui/material";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function InstructionPage() {
  const btnStyles = {
    borderRadius: 16, // Rounded corners
    backgroundColor: "#009900", // Pastel green color
    color: "white", // Text color
    minWidth: 100, // Remove default padding
    width: 200, // Set a fixed width
    height: 50, // Set a fixed height
    margin: 2, //Add padding
    "&:hover": {
      backgroundColor: "#20c997", // Change color on hover
    },
  };

  return (
    <div>
      <Nav />
      <h1
        style={{
          textAlign: "center",
          fontWeight: "400",
          color: "#000000",
          fontFamily: "Itim",
          fontStyle: "normal",
          paddingTop: "10px",
          fontSize: "36px",
        }}
      >
        Welcome
      </h1>
      <p
        style={{
          textAlign: "center",
          fontWeight: "200",
          color: "#000000",
          fontFamily: "Itim",
          fontStyle: "normal",
          paddingTop: "10px",
          fontSize: "24px",
        }}
      >
        Step 1: Take a picture of your trash{" "}
      </p>
      <img
        src="/slr-camera-512.png"
        alt="SLR Camera"
        style={{
          display: "block",
          margin: "auto",
          width: "100px",
          padding: "10px",
        }}
      />
      <p
        style={{
          textAlign: "center",
          fontWeight: "200",
          color: "#000000",
          fontFamily: "Itim",
          fontStyle: "normal",
          paddingTop: "10px",
          fontSize: "24px",
        }}
      >
        Step 2: Identify if the object is recyclable, compostable, or
        landfillable
      </p>
      <img
        src="/trash-512.png"
        alt="Trash Icon"
        style={{
          display: "block",
          margin: "auto",
          width: "150px",
          padding: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/camera" style={{ textDecoration: "none" }}>
          <Button sx={btnStyles}> Start Camera </Button>
        </Link>
      </div>
    </div>
  );
}
export default InstructionPage;
