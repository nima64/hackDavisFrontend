import * as React from "react";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function OpenCamera() {
  return <Button variant="contained">Open Camera</Button>;
}

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
      <div>
        <Nav />
        <div className="row">
          <div className="p-5 mx-auto text-center col-md-8">
            <h1 className="fw-bolder">Welcome</h1>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto text-center col">
            <CameraAltIcon style={{ fontSize: "4rem", fill: "green" }} />
          </div>
          <div className="col">
            <h3>Scan your item</h3>
          </div>
        </div>
        <div className="row m-5">
          <div className="mx-auto text-center col">
            <AddIcon style={{ fill: "green", fontSize: "6rem" }} />
          </div>
          <div className="col">
            <h3>We can tell if the item can be recycled</h3>
          </div>
        </div>
        <div className="row m-5">
          <div className="mx-auto text-center ">
            <Button variant="contained">Open Camera</Button>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <Button variant="contained" style={{ textDecoration: "none" }}>
              <Link
                to="/signin"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Sign In
              </Link>
            </Button>
          </div>
        </div>
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

export default HomePage;
