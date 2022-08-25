import React, { useState } from "react";
import { ReactComponent as Line } from "assets/icons/Line-long.svg";
import { ReactComponent as LeftBtn } from "assets/icons/left-arrow.svg";
import { ReactComponent as RightBtn } from "assets/icons/right-arrow.svg";
import VSCarousel from "components/VSCarousel";
import { DirectButton } from "components/AnimationButton";

const items = [
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
  {
    title: "WC 2022 5th Warm up Match 5th August, 06:00 pm",
    team_mark1: "images/dashboard/mark1.png",
    team_name1: "Delhi Capitals",
    team_mark2: "/images/dashboard/mark2.png",
    team_name2: "Kings XI Punjab",
  },
];

const LokedGaming = () => {
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);

  return (
    <div>
      <div className="mt-[67px] pb-[47px] flex flex-col container-main overflow-hidden">
        <div className="flex items-center flex-wrap">
          <div className="flex items-center">
            <h3 className="text-[#fff] w-44 md:w-fit">LOCKED GAMING</h3>
            <Line className="ml-6 w-44 md:w-fit" />
          </div>
          <div className="ml-auto flex gap-[14px]">
            <DirectButton animation="animate-left-right">
              <LeftBtn
                className="cursor-pointer"
                onClick={() => {
                  setNext(!next);
                }}
              />
            </DirectButton>
            <DirectButton animation="animate-right-left">
              <RightBtn
                className="cursor-pointer"
                onClick={() => {
                  setPrevious(!previous);
                }}
              />
            </DirectButton>
          </div>
        </div>
        <VSCarousel left={next} right={previous} content={items} />
      </div>
    </div>
  );
};

export default LokedGaming;
