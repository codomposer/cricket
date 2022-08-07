import React from "react";
import { ReactComponent as Line } from "assets/icons/line2.svg";
import { ReactComponent as LineSmall } from "assets/icons/line3.svg";
import PointItem from "components/PointItem";
import Chart from "components/Chart";

const items = [
  {
    img: "/images/dashboard/players/player1.png",
    name: "Virat Kholi",
    country: "ind",
    direction: "up",
    score1: "+2",
    score2: "+40",
    score3: "+40",
    score4: "150",
    score5: "10",
    total: "720 Pts",
  },
  {
    img: "/images/dashboard/players/player2.png",
    name: "Mohammad Hafeez",
    country: "pak",
    direction: "down",
    score1: "-1",
    score2: "-15",
    score3: "-15",
    score4: "10",
    score5: "15",
    total: "220 Pts",
  },
  {
    img: "/images/dashboard/players/player3.png",
    name: "David Warner",
    country: "aus",
    direction: "up",
    score1: "+4",
    score2: "+18",
    score3: "+18",
    score4: "120",
    score5: "18",
    total: "905 Pts",
  },
  {
    img: "/images/dashboard/players/player4.png",
    name: "Joe Root",
    country: "eng",
    direction: "down",
    score1: "-4",
    score2: "-10",
    score3: "-10",
    score4: "70",
    score5: "21",
    total: "170 Pts",
  },
];

const PointTable = () => {
  return (
    <div className="container-main flex flex-row flex-wrap xl:flex-nowrap gap-6">
      <div className="flex flex-col px-6 md:pl-10 md:pr-14 py-7 bg-secondary/10 rounded-[20px] w-full xl:basis-3/4">
        <div className="flex items-center">
          <h3 className="text-[#fff] uppercase">High Potential Minters</h3>
          <Line className="ml-6 w-44 md:w-fix"/>
        </div>
        <div className="flex flex-col justify-evenly w-full gap-6 ml-auto mt-7">
          {items.map((item, index) => (
            <PointItem
              img={item.img}
              name={item.name}
              country={item.country}
              direction={item.direction}
              score1={item.score1}
              score2={item.score2}
              score3={item.score3}
              score4={item.score4}
              score5={item.score5}
              total={item.total}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-secondary/10 rounded-[20px] pt-7 pl-6 pr-4 xl:basis-1/4">
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
