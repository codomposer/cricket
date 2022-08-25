import React from "react";

const Collabration = () => {
  return (
    <div className="bg-main relative">
      <div className="container-home pt-24 pb-[109px] flex flex-wrap gap-[89px] justify-between">
        <div className="relative h-fit">
          <div className="mt-[25px] relative bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] rounded-[20px] flex flex-col backdrop-blur-[90px] pt-[47px] pb-[52px] pl-[20px] pr-6 w-[380px] border-2 border-[#ffffff3b] h-fit z-10">
            <p className="uppercase text-lg text-[#000] font-bold">
              COLLABRATION WITH US
            </p>
            <p className="mt-6 uppercase font-medium text-xl">
              CRICKET IS A GAME FULL OR FORLORN HOPES AND SUDDEN DRAMATIC
              CHANGES OF FORTUNE
            </p>
            <button className="mt-[33px] py-[10px] px-3 bg-primary hover:bg-primary/50 w-fit rounded-[10px] cursor-pointer">
              Live matches
            </button>
          </div>
          <div className="absolute -right-[25px] -bottom-7 w-44 h-32 bg-[#018980] rounded-[20px]"></div>
          <div className="absolute top-0 -left-[35px] w-44 h-32 bg-[#018980] rounded-[20px]"></div>
        </div>
        <div className="relative h-fit">
          <div className="relative bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] rounded-[20px] backdrop-blur-[90px] py-[60px] px-[40px] w-[720px] border-2 border-[#ffffff3b] grid grid-cols-2 gap-[85px] z-10">
            <div className="flex flex-col">
              <p className="font-bold text-[50px] leading-[61px] text-[#ffffff4d]">
                01
              </p>
              <h4 className="uppercase text-[#fff]">FIXTURES</h4>
              <p className="mt-1 text-sm font-normal text-[#fff]">
                Cricket is a bat-and-ball game played between two teams of
                eleven players on a field.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[50px] leading-[61px] text-[#ffffff4d]">
                02
              </p>
              <h4 className="uppercase text-[#fff]">FIXTURES</h4>
              <p className="mt-1 text-sm font-normal text-[#fff]">
                Cricket is a bat-and-ball game played between two teams of
                eleven players on a field.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[50px] leading-[61px] text-[#ffffff4d]">
                03
              </p>
              <h4 className="uppercase text-[#fff]">FIXTURES</h4>
              <p className="mt-1 text-sm font-normal text-[#fff]">
                Cricket is a bat-and-ball game played between two teams of
                eleven players on a field.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[50px] leading-[61px] text-[#ffffff4d]">
                04
              </p>
              <h4 className="uppercase text-[#fff]">FIXTURES</h4>
              <p className="mt-1 text-sm font-normal text-[#fff]">
                Cricket is a bat-and-ball game played between two teams of
                eleven players on a field.
              </p>
            </div>
          </div>
          <div className="absolute -top-14 -right-14 w-64 h-64 bg-[#018980] rounded-full"></div>
          <div className="absolute -bottom-7 -left-7 w-[120px] h-[120px] bg-[#018980] rounded-full"></div>
        </div>
      </div>
      <img
        src="images/home/collabration.png"
        alt="collabration"
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default Collabration;
