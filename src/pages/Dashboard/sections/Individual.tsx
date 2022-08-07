import React from "react";
import { ReactComponent as LineLeft } from "assets/icons/Line4.svg";
import { ReactComponent as LineRight } from "assets/icons/Line5.svg";

const Individual = () => {
  return (
    <div className="flex flex-row flex-wrap xl:flex-nowrap gap-6 container-main mt-12 pb-14">
      <div className="flex flex-col xl:basis-3/4">
        <div className="flex items-center">
          <h3 className="text-[#fff]">INDIVIDUAL PLAYER STAKING</h3>
          <LineLeft className="ml-6" />
        </div>
        <img
          src="/images/dashboard/coming.png"
          className="mt-6 max-w-full w-max h-auto"
          alt="back"
        />
      </div>

      <div className="flex flex-col xl:basis-1/4">
        <div className="flex items-center">
          <h3 className="text-[#fff]">FLEXIBLE GAMING</h3>
          <LineRight className="ml-6" />
        </div>
        <div
          className="mt-6 w-[444px] h-[292px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: `url(/images/dashboard/flexible-back.png)`,
          }}
        >
          <p
            className="font-dm-sans text-[#fff] pt-[38px] px-[68px] text-center text-xl"
          >
            WC 2022 5th Warm up Match 5th August, 06:00 pm
          </p>
          <div className="mt-[39px] flex justify-around w-full">
            <div className="flex flex-col items-center">
              <img
                src="/images/dashboard/mark1.png"
                className="w-16 h-full"
                alt="mark"
              />
              <p className="text-[#fff] mt-1 font-dm-sans font-medium text-base">
                Delhi Capitals
              </p>
            </div>
            <img
              src="/images/dashboard/vs-circle.png"
              className="w-[61px] h-fit"
              alt="vs"
            />
            {/* <VS className="w-[61px] h-[61px]"/> */}
            <div className="flex flex-col items-center">
              <img
                src="/images/dashboard/mark2.png"
                className="w-11 h-full"
                alt="mark"
              />
              <p className="text-[#fff] mt-1 font-dm-sans font-medium text-base">
                Kings XI Punjab
              </p>
            </div>
          </div>
          <button className="bg-[#fff] text-primary font-bold text-base font-dm-sans mt-8 rounded-t-[10px] py-[6px] px-6 hover:bg-[#fff]/50 hover:text-[#fff] transition-all duration-150">
            Play Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Individual;
