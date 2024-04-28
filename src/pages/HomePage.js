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

const videoConstraints = {
  width: 200,
  height: 200,
};

const HomePage = withAuthInfo(({ isLoggedIn }) => {
  const logoutFn = useLogoutFunction();
  const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions();

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
      <div>
        <Nav />

        <div className="row">
          <div className="text-center">
            {isLoggedIn ? (
              <SignInBtn onClick={redirectToLoginPage} />
            ) : (
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
                </Box>
              </>
            )}
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
});

export default HomePage;
