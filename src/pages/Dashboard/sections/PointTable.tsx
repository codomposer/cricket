import React from "react";
import { ReactComponent as Line } from "assets/icons/line2.svg";
import { ReactComponent as LineSmall } from "assets/icons/line3.svg";
import PointItem from "components/PointItem";
import Chart from "components/Chart";

const items = [
  { title: "M", content: ["8", "7", "7"] },
  { title: "W", content: ["6", "5", "5"] },
  { title: "L", content: ["2", "2", "2"] },
  { title: "T", content: ["0", "0", "0"] },
  { title: "PTS", content: ["12", "10", "10"] },
  { title: "NRR", content: ["+0.547", "+1.263", "-0.171"] },
];

const PointTable = () => {
  return (
    <div className="container-main flex flex-row flex-wrap xl:flex-nowrap gap-6">
      <div className="flex flex-col px-10 py-7 bg-secondary/10 rounded-[20px] basis-3/4">
        <div className="flex items-center">
          <h3 className="text-[#fff]">POINT TABLE</h3>
          <Line className="ml-6" />
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex flex-col basis-4/12">
            <p className="font-bold text-lg text-[#fff]">Teams</p>
            <div className="flex flex-col gap-9 mt-7 justify-center items-baseline">
              <div className="flex">
                <img
                  src="images/dashboard/mark3.png"
                  className="w-9 h-full"
                  alt="mark"
                />
                <p className="font-medium text-lg text-[#fff]/80 ml-2">
                  Delhi Capitals
                </p>
              </div>
              <div className="flex">
                <img
                  src="images/dashboard/mark4.png"
                  className="w-9 h-full"
                  alt="mark"
                />
                <p className="font-medium text-lg text-[#fff]/80 ml-2">
                  Chennai Super Kings
                </p>
              </div>
              <div className="flex">
                <img
                  src="images/dashboard/mark5.png"
                  className="w-[23px] h-full ml-2"
                  alt="mark"
                />
                <p className="font-medium text-lg text-[#fff]/80 ml-2 w-[260px]">
                  Royal Challengers Bangalore
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly w-full gap-6 ml-auto basis-8/12 ">
            {items.map((item, index) => (
              <PointItem
                title={item.title}
                content={item.content}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-secondary/10 rounded-[20px] pt-7 pl-6 pr-4 basis-1/4">
        <div className="flex items-center">
          <h3 className="text-[#fff] w-max">ODDS BY USERS</h3>
          <LineSmall className="ml-10" />
        </div>
        <div className="flex items-center justify-center w-[300px] overflow-hidden ml-14">
            <Chart />
        </div>
      </div>
    </div>
  );
};

export default PointTable;
