import React, { useState } from "react";
import { ReactComponent as Line } from "assets/icons/Line-long.svg";
import { ReactComponent as LeftBtn } from "assets/icons/left-arrow.svg";
import { ReactComponent as RightBtn } from "assets/icons/right-arrow.svg";
import VSCarousel from "components/VSCarousel";

const LokedGaming = () => {
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);

  return (
    <div>
      <div className="mt-[67px] pb-[47px] flex flex-col container-main">
        <div className="flex items-center">
          <h3 className="text-[#fff]">LOCKED GAMING</h3>
          <Line className="ml-6" />
          <div className="ml-auto flex gap-[14px]">
            <LeftBtn
              className="cursor-pointer"
              onClick={() => {
                setNext(!next);
              }}
            />
            <RightBtn
              className="cursor-pointer"
              onClick={() => {
                setPrevious(!previous);
              }}
            />
          </div>
        </div>
        <VSCarousel left={next} right={previous} />
      </div>
    </div>
  );
};

export default LokedGaming;
