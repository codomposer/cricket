import React from "react";
import { ReactComponent as VsHome } from "assets/icons/vs-home.svg";

const MatchList = () => {
  return (
    <div className="bg-[#14171C]">
      <div className="container-home py-16">
        <h3 className="uppercase text-center">
          Today{" "}
          <span className="text-[#008A81] font-zuumeroughbold text-5xl">
            Match List
          </span>
        </h3>
        <div className="mt-6 flex items-center justify-between">
          <img src="images/home/cup-logo1.png" alt="cup-logo1" />
          <div className="relative flex items-center justify-center h-[426px]">
            <h1 className="font-zuumeroughbold text-[#FFFFFF] opacity-10 text-[250px] leading-[275px] tracking-[0.2em] text-center">
              LIVE
            </h1>
            <VsHome className="absolute" />
          </div>
          <img src="images/home/cup-logo2.png" alt="cup-logo2" />
        </div>
      </div>
    </div>
  );
};

export default MatchList;
