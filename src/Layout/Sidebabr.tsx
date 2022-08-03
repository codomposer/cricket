import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/home.svg";
import { ReactComponent as Whitepaper } from "assets/icons/whitepaper.svg";
import { ReactComponent as About } from "assets/icons/about.svg";
import { ReactComponent as Crypto } from "assets/icons/bitcoin-(btc).svg";
import { ReactComponent as Wallet } from "assets/icons/wallet.svg";
import { ReactComponent as Voting } from "assets/icons/voting.svg";
import { ReactComponent as Staking } from "assets/icons/staking.svg";
import { ReactComponent as Setting } from "assets/icons/setting.svg";
import { ReactComponent as Line } from "assets/icons/Line.svg";
import { ReactComponent as Star } from "assets/icons/medal-star.svg";
import ScheduleLogo from "components/ScheduleLogo";

const items = [
  {
    title: "IPL T20",
    img: "/images/sidebar/t20.png",
  },
  {
    title: "IPL T10",
    img: "/images/sidebar/t10.png",
  },
  {
    title: "WORLD CRICKET LEAGUE",
    img: "/images/sidebar/league.png",
  },
  {
    title: "WORLD CUP",
    img: "/images/sidebar/world.png",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col">
      <div className="bg-primary py-4">
        <h1 className="text-[#fff] text-center font-zuumeroughbolditalic ">
          LOGO
        </h1>
      </div>
      <div className="bg-theme py-7 flex flex-col">
        <ul className="font-medium text-lg text-[#fff] flex flex-col gap-3">
          <div className="flex bg-primary/10 cursor-pointer">
            <li className="flex py-3 pl-11">
              <Logo />
              <span className="ml-5 text-lg font-mediums">Home</span>
            </li>
            <div className="bg-primary w-1 border rounded-l-[40px] border-primary ml-auto"></div>
          </div>
          <li className="sidebar-item">
            <Whitepaper />
            <span className="ml-5 text-lg font-mediums">Whitepaper</span>
          </li>
          <li className="sidebar-item">
            <About />
            <span className="ml-5 text-lg font-mediums">About</span>
          </li>
          <li className="sidebar-item">
            <Crypto />
            <span className="ml-5 text-lg font-mediums">Buy Crypto</span>
          </li>
          <li className="sidebar-item">
            <Wallet />
            <span className="ml-5 text-lg font-mediums">My Wallet</span>
          </li>
          <li className="sidebar-item">
            <Voting />
            <span className="ml-5 text-lg font-mediums">Governance Voting</span>
          </li>
          <li className="sidebar-item">
            <Staking />
            <span className="ml-5 text-lg font-mediums">Staking</span>
          </li>
          <li className="sidebar-item">
            <Setting />
            <span className="ml-5 text-lg font-mediums">Settings</span>
          </li>
        </ul>
        <div className="px-[30px] ">
          <Line className="my-[51px]" />

          <div className="bg-primary/20 rounded-[40px] border-[1px] border-border-color flex flex-col items-center justify-center p-6">
            <Star />
            <p className="font-medium text-sm text-[#fff] text-center">
              Share your code and earn rewards
            </p>
            <button className="bg-primary rounded-[40px] px-9 py-2 mt-6 text-[#fff] hover:bg-primary/50 transition-all duration-150">
              <span className="font-semibold text-sm">Share Code</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-10 px-6">
          {items.map((item, index) => {
            return (
              <ScheduleLogo title={item.title} img={item.img} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
