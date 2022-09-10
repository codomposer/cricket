import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Earth } from "assets/icons/earth.svg";
import { ReactComponent as ArrDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook-round.svg";
import { ReactComponent as Linkedin } from "assets/icons/linkedin-round.svg";
import { ReactComponent as Twitter } from "assets/icons/twitter-round.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram-round.svg";

const Footer = () => {
  return (
    <div className="bg-theme">
      <div
        className="bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(/images/home/Deco.png)`,
        }}
      >
        <div className="container-home pt-6 pb-8 md:pb-24 ">
          <div className="flex flex-wrap mt-12 gap-10 xl:justify-between xl:gap-0">
            <div className="flex flex-col ">
              <Logo className="w-[185px]" />
              <p className="text-base font-Roboto mt-4 w-[285px]">
                Nam posuere accumsan porta. Integer id orci sed ante tincidunt
                tincidunt sit amet sed libero.
              </p>
              <p className="font-Roboto mt-9 text-base text-[#ffffff7e]">
                © 2022{" "}
                <label className="text-[##21BBB3]">Power for Punters. </label>
                <br />
                All Rights Reserved
              </p>
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-lg font-Roboto text-[#018980] font-bold cursor-pointer">
                COMPANY
              </p>
              <div className="mt-6 flex flex-col gap-6 text-[#FFFFFF8A] text-base font-Roboto">
                <p className="cursor-pointer">Donec dignissim</p>
                <p className="cursor-pointer"> Curabitur egestas </p>
                <p className="cursor-pointer">Nam posuere </p>
                <p className="cursor-pointer">Aenean facilisis</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-lg font-Roboto text-[#018980] font-bold cursor-pointer">
                Services
              </p>
              <div className="mt-6 flex flex-col gap-6 text-[#FFFFFF8A] text-base font-Roboto">
                <p className="cursor-pointer">Cras convallis</p>
                <p className="cursor-pointer">Vestbulum faucibus</p>
                <p className="cursor-pointer">Quisque lacinia purus</p>
                <p className="cursor-pointer">Aliquam nec ex</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="uppercase text-lg font-Roboto text-[#018980] font-bold cursor-pointer">
                resources
              </p>
              <div className="mt-6 flex flex-col gap-6 text-[#FFFFFF8A] text-base font-Roboto">
                <p className="cursor-pointer">Suspendisse porttitor</p>
                <p className="cursor-pointer"> Nam posuere</p>
                <p className="cursor-pointer">Curabitur egestas</p>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className="gap-[18px] flex">
                <Facebook className="cursor-pointer hover:opacity-70 " />
                <Linkedin className="cursor-pointer hover:opacity-70" />
                <Twitter className="cursor-pointer hover:opacity-70" />
                <Instagram className="cursor-pointer hover:opacity-70" />
              </div>
              <div>
                <button className="bg-[#fff] rounded-[5px] border-[#21BBB3] border-[1px] flex items-center w-full h-10 mt-10 px-[11px] py-[9px] justify-between">
                  <Earth />
                  <span className="text-[#000] text-lg font-medium">En</span>
                  <ArrDown />
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          src="images/home/collabration.png"
          alt="collabration"
          className="absolute bottom-0 right-0 w-[400px] h-[160px] translate-x-[200px] md:translate-x-[150px] lg:translate-x-[100px]"
        />
      </div>
    </div>
  );
};

export default Footer;
