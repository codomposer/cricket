import React from "react";
import { ReactComponent as Tuor } from "assets/icons/tuor.svg";
import { ReactComponent as Award } from "assets/icons/award.svg";
import { ReactComponent as Adventure } from "assets/icons/adventure.svg";

const WhatWeDo = () => {
  return (
    <div className="py-16 container-home bg-main">
      <h3 className="uppercase text-center text-5xl">
        What {" "}
        <span className="text-[#008A81] font-zuumeroughbold text-5xl">
           we do
        </span>
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-0 justify-center lg:justify-between">
        <div className="rounded-[20px] card-gradient w-[302px] xl:w-[332px] h-full bg-gradient-to-b from-[#ffffff33] to-[#ffffff00]">
          <Tuor />
          <h5 className="uppercase mt-8">GUIDED TOURS</h5>
          <p className="text-[#fff] text-base w-[255px] xl:w-[277px] text-center mt-[14px]">
            To use an analogy that everyone can relate to, our seasoned team has
            “seen the movie” before.
          </p>
        </div>
        <div className="rounded-[20px] card-gradient w-[302px] xl:w-[332px] h-full bg-gradient-to-b from-[#008a8133] to-[#ffffff00] lg:mt-16">
          <Award />
          <h5 className="uppercase mt-8">OUR AWRDS</h5> 
          <p className="text-[#fff] text-base w-[255px] xl:w-[277px] text-center mt-[14px]">
            To use an analogy that everyone can relate to, our seasoned team has
            “seen the movie” before.
          </p>
        </div>
        <div className="rounded-[20px] card-gradient w-[302px] xl:w-[332px] h-full bg-gradient-to-b from-[#ffffff33] to-[#ffffff00]">
          <Adventure />
          <h5 className="uppercase mt-8">ADVENTURE</h5>
          <p className="text-[#fff] text-base w-[255px] xl:w-[277px] text-center mt-[14px]">
            To use an analogy that everyone can relate to, our seasoned team has
            “seen the movie” before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
