import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "assets/icons/schedule-logo.svg";
import { ReactComponent as VS } from "assets/icons/vs.svg";

type Props = {
  title?: string;
  img?: string;
};

const ScheduleLogo: React.FC<Props> = ({ title, img }) => {
  const [fontSize, setFontSize] = useState("10px");
  const [lineHeight, setLineHeight] = useState("10px");

  useEffect(() => {
    const len: Number = title?.length || 0;
    if (len < 8) {
      setFontSize("60px");
      setLineHeight("65px");
    } else if (len < 10) {
      setFontSize("44px");
      setLineHeight("60px");
    } else if (len > 15) {
      setFontSize("32px");
      setLineHeight("35px");
    }
  });

  return (
    <>
      <div className="flex flex-col w-full h-full schedule-container relative">
        <img src={img} alt="back" className="z-0" />
        <div className="z-10 absolute w-full h-full flex flex-col items-center pt-[14px]">
          <Logo />
          <h2
            className="font-zuumeroughbolditalic text-[#fff] transform-logo px-3 text-center"
            style={{ fontSize: fontSize, lineHeight: lineHeight }}
          >
            {title}
          </h2>
          <div className="flex items-center transform-logo -mt-5">
            <span className="font-zuumeroughbolditalic text-3xl text-[#fff]">
              INDIA
            </span>
            <VS className="rotate-6" />
            <span className="font-zuumeroughbolditalic text-3xl text-[#fff]">
              PAKISTAN
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleLogo;
