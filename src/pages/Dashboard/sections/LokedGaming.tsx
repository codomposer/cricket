import React from "react";
import { ReactComponent as Line } from "assets/icons/Line-long.svg";
import { ReactComponent as VS } from "assets/icons/vs-circle.svg";

const LokedGaming = () => {
  return (
    <div className="mt-[67px] pb-[47px] flex flex-col container-main">
      <div className="flex items-center">
        <h3 className="text-[#fff]">LOCKED GAMING</h3>
        <Line className="ml-6" />
      </div>
      <div className="flex gap-6">
        <div
          className="mt-[22px] w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: `url(/images/dashboard/locked-back.png)`,
          }}
        >
          <p className="font-dm-sans text-[#fff] pt-[38px] px-[68px] text-center text-xl">
            WC 2022 5th Warm up Match 5th August, 06:00 pm
          </p>
          <div className="mt-[39px] flex justify-around w-full">
            <div className="flex flex-col items-center">
              <img
                src="/images/dashboard/mark1.png"
                className="w-16 h-full"
                alt="mark"
              />
              <p className="text-[#fff] font-dm-sans font-medium text-base">
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
              <p className="text-[#fff] font-dm-sans font-medium text-base">
                Kings XI Punjab
              </p>
            </div>
          </div>
          <button className="bg-[#fff] text-primary font-bold text-base font-dm-sans mt-8 rounded-t-[10px] py-[6px] px-6 hover:bg-[#fff]/50 hover:text-[#fff] transition-all duration-150">
            Play Game
          </button>
        </div>

        <div
          className="mt-[22px] w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: `url(/images/dashboard/locked-back.png)`,
          }}
        >
          <p className="font-dm-sans text-[#fff] pt-[38px] px-[68px] text-center text-xl">
            WC 2022 5th Warm up Match 5th August, 06:00 pm
          </p>
          <div className="mt-[39px] flex justify-around w-full">
            <div className="flex flex-col items-center">
              <img
                src="/images/dashboard/mark1.png"
                className="w-16 h-full"
                alt="mark"
              />
              <p className="text-[#fff] font-dm-sans font-medium text-base">
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
              <p className="text-[#fff] font-dm-sans font-medium text-base">
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

export default LokedGaming;
