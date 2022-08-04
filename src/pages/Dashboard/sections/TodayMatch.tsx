import React, { Component } from "react";
import { ReactComponent as Line } from "assets/icons/Line-long.svg";
import { ReactComponent as Logo } from "assets/icons/logo-big.svg";
import { ReactComponent as Ball } from "assets/icons/ball.svg";
import { ReactComponent as VS } from "assets/icons/vs.svg";

const TodayMatch = () => {
  return (
    <div className="flex flex-col container-main ">
      <div className="flex items-center">
        <h3 className="text-[#fff]">Todays match</h3>
        <Line className="ml-6" />
      </div>
      <div
        className="mt-4 bg-no-repeat bg-cover bg-center flex"
        style={{
          backgroundImage: `url(/images/dashboard/back.png)`,
        }}
      >
        <div className="flex flex-col pl-[74px] pt-[63px] pb-10">
          <Logo />
          <button className="mt-[67px] px-8 py-3 bg-primary rounded-[40px] flex items-center hover:bg-primary/50 transition-all duration-150">
            <Ball />
            <span className="font-semibold text-sm text-[#fff] ml-[10px] ">
              Play Now
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center transform-logo ml-[290px]">
          <div className="flex items-center">
            <span className="font-zuumeroughbolditalic text-[80px] leading-[86px] text-[#fff]">
              DC
            </span>
            <VS className="rotate-6" />
            <span className="font-zuumeroughbolditalic text-[80px] leading-[86px] text-[#fff]">
              KKR
            </span>
          </div>
          <h2 className="font-zuumeroughbolditalic text-[60px] leading-[65px] text-[#fff]">
            IPL 2022
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TodayMatch;
