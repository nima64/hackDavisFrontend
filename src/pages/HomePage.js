import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import {
  useLogoutFunction,
  useRedirectFunctions,
  withAuthInfo,
} from "@propelauth/react";
// import Webcam from "react-webcam";
import Camera from "../components/Camera";
import AuthenticatedRequest from "../components/AuthenticatedRequest";
import "./Homepage.css";
import createGlobe from "../components/globe";

function OpenCamera(props) {
  return (
    <Button {...props} variant="contained">
      Open Camera
    </Button>
  );
}

const SignInBtn = (props) => (
  <Button
    onClick={props.onClick}
    variant="contained"
    style={{ textDecoration: "none" }}
  >
    Sign In
  </Button>
);

const GlobeBanner = () => (
  <div id="canvas-container" style={{ position: "relative" }}>
    <div
      style={{
        top: "40%",
        position: "absolute",
        width: "100%",
        color: "white",
      }}
    >
      <div className="row">
        <div className="col position-relative">
          <div
            style={{
              position: "absolute",
              right: "-40px",
              top: "-40%",
            }}
          >
            <img
              id="left-arrow"
              style={{ left: "50%" }}
              src="white-arrow.png"
            />
          </div>
        </div>
        <h1 className="col" style={{ textAlign: "center", fontSize: "5rem" }}>
          Recycle This
        </h1>
        <div className="col position-relative">
          <div
            style={{
              position: "absolute",
              left: "-40px",
              top: "-40%",
            }}
          >
            <img title="right-arrow" id="right-arrow" src="white-arrow.png" />
          </div>
        </div>
      </div>
    </div>
    <canvas id="myCanvas"></canvas>
  </div>
);

let loadedOnce = false;
const CameraApiAuth = withAuthInfo(({ isLoggedIn }) => {
  const logoutFn = useLogoutFunction();
  const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions();
  return isLoggedIn ? (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust the height as needed
        }}
      >
        <div>
          <Camera />
        </div>
        <Button
          onClick={logoutFn}
          variant="contained"
          style={{ textDecoration: "none" }}
        >
          Signout
        </Button>
      </Box>
    </>
  ) : (
    <SignInBtn onClick={redirectToLoginPage} />
  );
});

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </header>
      <GlobeBanner />
      <div>
        {/* <Nav /> */}

        <div className="row">
          <div className="text-center">
            <CameraApiAuth />
          </div>
        </div>
        {/* <div className="row m-5">
          <div className="mx-auto text-center ">
            <Button variant="contained">Open Camera</Button>
          </div>
        </div> */}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  createGlobe();
});

export default HomePage;
