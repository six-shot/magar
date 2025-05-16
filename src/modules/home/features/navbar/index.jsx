import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative">
      <div className="fixed w-full backdrop-blur-[5px] bg-[#ffffff07] z-[100000]  ">
        <div className="max-w-[1440px] mx-auto  ">
          <div className="w-full flex justify-between items-center  sm:py-[18px] py-[16px]  px-[5%] ">
            <div className="text-white font-semibold  flex gap-2 items-center">
              <img className="sm:w-[70px] w-[50px]" src={logo} alt="logo" />
              <h4 className="sm:text-[30px] text-[20px] font-bold">MAGMAR</h4>
            </div>
            <nav>
              <ul className="sm:flex hidden gap-7 items-center text-white/70 text-sm">
                <li className="cursor-pointer">
                  <a href="#">Home</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#offers">Offers</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#features">Features</a>
                </li>
                <li className="cursor-pointer">
                  <a href="https://magmar-1.gitbook.io/magmar">Whitepaper</a>
                </li>

                <li className="cursor-pointer">Chart</li>
                <div>
                  <FaXTwitter className="text-[24px] text-white" />
                </div>
                <div>
                  <FaTelegramPlane className="text-[24px] text-white" />
                </div>
              </ul>
            </nav>
            <div
              onClick={() => setToggle(!toggle)}
              className="sm:hidden flex text-[30px] text-white"
            >
              {toggle ? <IoClose /> : <HiMenuAlt4 />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex flex-col" : "hidden"
        } py-6 backdrop-blur-[5px] bg-[#ffffff07] fixed top-20 right-0 mx-4 my-2 min-w-[200px] rounded-[20px] sidebar z-[100]`}
      >
        <ul className="list-none flex flex-col gap-4 text-white justify-end items-center flex-1">
          <li className="cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#offers">Offers</a>
          </li>
          <li className="cursor-pointer">
            <a href="#features">Features</a>
          </li>
          <li className="cursor-pointer">
            <a href="https://magmar-1.gitbook.io/magmar">Whitepaper</a>
          </li>

          <li className="cursor-pointer">Chart</li>
          <div className="flex gap-4">
            <div>
              <FaXTwitter className="text-[24px] text-white" />
            </div>
            <div>
              <FaTelegramPlane className="text-[24px] text-white" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
