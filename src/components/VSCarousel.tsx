import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface Item {
  title: string;
  team_mark1: string;
  team_name1: string;
  team_mark2: string;
  team_name2: string;
}

type Props = {
  left?: boolean;
  right?: boolean;
  content?: Item[];
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3.4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 0.93,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const VSCarousel: React.FC<Props> = ({ left, right, content }) => {
  let slider: any = null;

  const [next, setNext] = useState(left);
  const [previous, setPrevious] = useState(right);

  useEffect(() => {
    slider.slickPrev();
  }, [left]);

  useEffect(() => {
    slider.slickNext();
  }, [right]);

  return (
    <div style={{ overflow: "hidden" }} className="-translate-x-[123px]s">
      <div className="w-full">
        <Slider ref={(c) => (slider = c)} {...settings} className="mt-[20px]">
          {content?.map((item, index) => (
            <div>
              <div
                className="w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
                style={{
                  backgroundImage: `url(/images/dashboard/locked-back.png)`,
                }}
              >
                <p className="font-dm-sans text-[#fff] pt-[38px] px-[68px] text-center text-xl">
                  {item.title}
                </p>
                <div className="mt-[39px] flex justify-around w-full">
                  <div className="flex flex-col items-center">
                    <img src={item.team_mark1} className="w-16 h-full hover:animate-bounce cursor-pointer" alt="mark" />
                    <p className="text-[#fff] font-dm-sans font-medium text-base">
                      {item.team_name1}
                    </p>
                  </div>
                  <img
                    src="/images/dashboard/vs-circle.png"
                    className="w-[61px] h-fit"
                    alt="vs"
                  />
                  {/* <VS className="w-[61px] h-[61px]"/> */}
                  <div className="flex flex-col items-center">
                    <img src={item.team_mark2} className="w-11 h-full hover:animate-bounce cursor-pointer" alt="mark" />
                    <p className="text-[#fff] font-dm-sans font-medium text-base">
                      {item.team_name2}
                    </p>
                  </div>
                </div>
                <button className="bg-[#fff] text-primary font-bold text-base font-dm-sans mt-8 rounded-t-[10px] py-[6px] px-6 hover:bg-[#fff]/50 hover:text-[#fff] transition-all duration-150">
                  Play Game
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VSCarousel;
