import React from "react";

const MatchResult = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] py-6 px-5 xl:px-7 2xl:px-14 flex flex-col justify-center rounded-[20px] items-center">
      <h5>May 11,2022</h5>
      <div className="mt-4 flex gap-5 md:gap-10 lg:gap-3 xl:gap-[53px] justify-between">
        <div className="flex gap-[25px] items-center">
          <img src="images/mark/mark3.png" alt="mark3" className="w-[60px] md:w-full"/>
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl md:text-3xl">160/5</p>
            <h5>20 Over</h5>
          </div>
        </div>
        <div className="flex gap-[25px] items-center">
          <div className="flex flex-col items-center">
            <p className="font-bold text-primary text-xl md:text-3xl">160/5</p>
            <h5 className="text-primary">20 Over</h5>
          </div>
          <img src="images/mark/mark4.png" alt="mark3" className="w-[60px] md:w-full"/>
        </div>
      </div>
      <p className="text-base font-medium mt-5">
        Cricket club Won by 7 Wickets
      </p>
    </div>
  );
};

export default MatchResult;
