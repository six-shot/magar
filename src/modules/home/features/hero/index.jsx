import Spline from "@splinetool/react-spline";
import React from "react";
import Navbar from "../navbar";
import Button from "../../compenents/buttons/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen ">
      <div className="w-full">
        <div className="absolute top-[250px] w-full z-10 text-center pointer-events-none">
          <div className="w-full h-[848px] relative -top-[170px] flex justify-center items-center">
            <h1 className="absolute bottom-[350px] md:text-[160px] text-[60px] -z-10 font-semibold hero-text text-center">
              Personalized <br /> Experience
            </h1>
          </div>
        </div>

        <iframe
          src="https://my.spline.design/newton39scradle-bFSdhC7jVplvT8X38oHE4lnd/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute z-0"
        ></iframe>
      </div>
    </div>
  );
}
