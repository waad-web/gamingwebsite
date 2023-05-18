import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <p className="title">
        E-sport <span>gaming content </span>{" "}
      </p>
      <img className="logoinside" src="logo.png" alt="" />
      <div className="text">
        {" "}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet
        </p>
      </div>
      <p className="text-player">
        {" "}
        <span> Player </span> <span> Pro player </span> <span> Streamer </span>{" "}
      </p>
      <div className="readmore">
        <a href="#"> READ MORE </a>
      </div>
      <div className="text-valuable">MOST VALURABLE PLAYER</div>
    </div>
  );
};
