import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  left?: boolean;
  right?: boolean;
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3.4,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2,
      }                     
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 2,
      }                     
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0.84,
        slidesToScroll: 1.2,
      }
    }
  ]
};

const VSCarousel: React.FC<Props> = ({ left, right }) => {
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
    <div style={{overflow: "hidden"}}>
      <div className="w-full">
        <Slider ref={(c) => (slider = c)} {...settings} className="mt-[20px]">
          <div>
            <div
              className="w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
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
          <div>
            <div
              className="w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
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
          <div>
            <div
              className="w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
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
          <div>
            <div
              className="w-[420px] flex flex-col items-center bg-no-repeat bg-cover bg-center rounded-[20px]"
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
        </Slider>
      </div>
    </div>
  );
};

export default VSCarousel;
