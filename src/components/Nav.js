import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ backgroundColor: "#b8e9b8" }} className="row">
      <div className="mx-auto text-center col-md-8">
        <div className="flex">
          <Link to="/">
            <img
              style={{ width: "10rem" }}
              src="/recyc.png"
              className="App-logo"
              alt="logo"
            />
          </Link>
        </div>
        <h1 style={{ fontWeight: "800" }}>Recycle This!</h1>
      </div>
    </div>
  );
};

export default Nav;
