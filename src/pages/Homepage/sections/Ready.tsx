import React from "react";
import { ReactComponent as People } from "assets/icons/people-group.svg";
import { ReactComponent as Men } from "assets/icons/man-group.svg";
import { ReactComponent as Document } from "assets/icons/document.svg";
import { ReactComponent as Send } from "assets/icons/android-send.svg";
import { ReactComponent as Tool } from "assets/icons/tool.svg";

const Ready = () => {
  return (
    <div className="bg-main">
      <div className="container-home pt-32 pb-[68px]">
        <div className="flex flex-col items-center relative">
          <div className="flex justify-center flex-wrap gap-10 relative z-10">
            <div className="bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] backdrop-blur-[90px] rounded-[10px] w-60 h-44 pt-[58px] pl-[44px] border-2 border-[#ffffff3b]">
              <p className="text-[40px] font-bold leading-[56px]">200</p>
              <p className="text-lg font-medium leading-[48px] -translate-y-3 uppercase -ml-2">
                Employee
              </p>
              <People className="absolute right-12 top-10" />
            </div>
            <div className="bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] backdrop-blur-[90px] rounded-[10px] w-60 h-44 pt-[58px] pl-[44px] border-2 border-[#ffffff3b]">
              <p className="text-[40px] font-bold leading-[56px]">+500</p>
              <p className="text-lg font-medium leading-[48px] -translate-y-3 uppercase ml-3">
                matches
              </p>
              <Men className="absolute right-8 top-6" />
            </div>
            <div className="bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] backdrop-blur-[90px] rounded-[10px] w-60 h-44 pt-[58px] pl-[44px] border-2 border-[#ffffff3b]">
              <p className="text-[40px] font-bold leading-[56px]">+300</p>
              <p className="text-lg font-medium leading-[48px] -translate-y-3 uppercase ml-4">
                clients
              </p>
              <Document className="absolute right-8 top-7" />
            </div>
          </div>
          <div className="w-[1100px] h-[125px] bg-[#008A81] rounded-[10px] absolute -bottom-[82px]"></div>
        </div>

        <div className="flex justify-between mt-48 bg-gradient-to-b from-[#ffffff33] to-[#ffffff00] backdrop-blur-[90px] border-2 border-[#ffffff3b] rounded-[10px] h-[340px] px-10">
          <img src="images/home/tool.png" alt="tool" className="h-[400px]" />
          <div className="my-auto">
            <h3 className="uppercase text-center text-[56px] leading-[62px]">
              Readt to get&nbsp;{" "}
              <span className="text-[#008A81] font-zuumeroughbold text-[56px] leading-[62px]">
                Started
              </span>
            </h3>
            <div className=" flex justify-center mt-[42px] rounded-[8px] bg-secondary text-center px-12 py-[18px] hover:bg-primary/50 cursor-pointer w-fit">
              <p className="uppercase font-medium">Write to us</p>
              <Send className="ml-6" />
            </div>
          </div>
          <div className="mt-auto mb-[25px]">
            <Tool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
