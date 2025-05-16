import Spline from "@splinetool/react-spline";
import React from "react";
import Navbar from "../navbar";
import Button from "../../compenents/buttons/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen  ">
      <div className="absolute bottom-[15%] w-full z-10 h-full pointer-events-none px-[5%]">
        <div className="w-full h-full flex flex-col justify-end pb-8">
          <h1 className="text-white font-bold text-[45px] leading-[50px]">
            Simplifying Crypto <br />
            Transactions
          </h1>
          <p className="text-white font-medium sm:text-lg text-base sm:w-[500px] w-full mt-[3%] mb-4">
            An ERC-4337 toolkit enhancing gasless transactions, social login,
            multichain support and much more making DeFi accessibile and secure.
          </p>
        </div>
      </div>

      <Spline
        className="absolute  z-0"
        scene="https://prod.spline.design/HXtrvfpheoREhBFV/scene.splinecode"
      /> */
    </div>
  );
}
