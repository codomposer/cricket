import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Earth } from "assets/icons/earth.svg";
import { ReactComponent as ArrDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as Wallet } from "assets/icons/wallet-white.svg";
import { ReactComponent as ArrUpRight } from "assets/icons/bi_arrow-up-right.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook-round.svg";
import { ReactComponent as Linkedin } from "assets/icons/linkedin-round.svg";
import { ReactComponent as Twitter } from "assets/icons/twitter-round.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram-round.svg";

const Home = () => {
  return (
    <div
      className=" bg-no-repeat bg-cover bg-center  relative"
      style={{
        backgroundImage: `url(/images/home/home-back.png)`,
      }}
    >
      <div className="flex flex-col w-full h-screen">
        <div className="absolute flex top-9 left-16 right-24 items-center ">
          <div className="flex items-center gap-48">
            <Logo className="cursor-pointer" />
            <button className="bg-[#fff] rounded-[5px] border-[#21BBB3] border-[1px] flex items-center w-[91px] h-[38px] px-[11px] py-[9px] justify-between">
              <Earth />
              <span className="text-[#000] text-lg font-medium">En</span>
              <ArrDown />
            </button>
          </div>
          <div className="ml-56 w-full flex items-center font-medium text-base text-[#fff] justify-between">
            <button className="cursor-pointer bg-opacity-0 skew-x-[26deg] px-6 py-2 hover:bg-secondary/50">
              <p className="-skew-x-[26deg]">Home</p>
            </button>
            <button className="cursor-pointer bg-opacity-0 skew-x-[26deg] px-6 py-2 hover:bg-secondary/50">
              <p className="-skew-x-[26deg]">About Us</p>
            </button>
            <button className="cursor-pointer bg-opacity-0 skew-x-[26deg] px-6 py-2 hover:bg-secondary/50">
              <p className="-skew-x-[26deg]">Our Team</p>
            </button>
            <button className="cursor-pointer bg-opacity-0 skew-x-[26deg] px-6 py-2 hover:bg-secondary/50">
              <p className="-skew-x-[26deg]">News</p>
            </button>
            <button className="cursor-pointer bg-opacity-0 skew-x-[26deg] px-6 py-2 hover:bg-secondary/50">
              <p className="-skew-x-[26deg]">Result</p>
            </button>
            <button className="uppercase font-normal text-sm flex px-[30px] py-3 items-center rounded-[36px] bg-primary gap-[14px] hover:bg-primary/50">
              <Wallet />
              Login
            </button>
          </div>
        </div>

        <div className="mt-52 justify-center -translate-x-14 w-full flex items-center  gap-20  ">
          <img
            src="images/home/cricket_img.png"
            alt="cricket_img"
            className=""
          />
          <div className="mt-20">
            <h1 className="uppercase font-zuumeroughbold text-[80px] text-[#fff] w-[324px] ">
              cricket most wonderful game
            </h1>
            <button className="px-[37px] py-[19px] gap-[11px] bg-primary mt-[39px] flex items-center hover:bg-primary/50 ">
              Learn More
              <ArrUpRight />
            </button>
          </div>
        </div>

        <div className="flex gap-[18px] ml-10 items-end h-full mb-10">
          <Facebook className="cursor-pointer hover:opacity-70 " />
          <Linkedin className="cursor-pointer hover:opacity-70" />
          <Twitter className="cursor-pointer hover:opacity-70" />
          <Instagram className="cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default Home;
