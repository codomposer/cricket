import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Whitepaper } from "assets/icons/whitepaper.svg";
import { ReactComponent as About } from "assets/icons/about.svg";
import { ReactComponent as Crypto } from "assets/icons/bitcoin-(btc).svg";
import { ReactComponent as Wallet } from "assets/icons/wallet.svg";
import { ReactComponent as Voting } from "assets/icons/voting.svg";
import { ReactComponent as Staking } from "assets/icons/staking.svg";
import { ReactComponent as Setting } from "assets/icons/setting.svg";
import { ReactComponent as Line } from "assets/icons/Line.svg";
import { ReactComponent as Star } from "assets/icons/medal-star.svg";
import { ReactComponent as Cup } from "assets/icons/schedule-logo.svg";
import { ReactComponent as VS } from "assets/icons/vs.svg";

import ScheduleLogo from "components/ScheduleLogo";
import { LayoutContext } from "./Root";

const Sidebar = () => {
  const ctx = useContext(LayoutContext);

  const { navWidth } = ctx;
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin="100%"
      universal
      style={{ width: 280, height: 1000 }}
    >
      <div
        className="sidebar flex flex-col h-full"
        style={{ width: navWidth, height: "100%", overflow: "overlay" }}
      >
        <div className="bg-theme py-3">
          {/* <h1 className="text-[#fff] text-center font-zuumeroughbolditalic ">
            LOGO
          </h1> */}
          <Logo className="mx-auto" />
        </div>
        <div className="bg-theme py-7 flex flex-col h-full">
          <ul className="font-medium text-lg text-[#fff] flex flex-col gap-3">
            <div className="flex bg-primary/10 cursor-pointer">
              <li className="flex py-3 pl-11">
                <Home />
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
              <span className="ml-5 text-lg font-mediums">
                Governance Voting
              </span>
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
          <div className="px-[30px] bg-theme">
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

          <div className="flex flex-col gap-6 py-10 px-6 bg-theme">
            <ScheduleLogo img="/images/sidebar/tba.png">
              {/* <div className="z-10 absolute w-full h-full flex flex-col items-center pt-[14px]">
                <Logo />
                <h2 className="font-zuumeroughbolditalic text-[#fff] transform-logo px-3 text-center">
                  T10 Cricket League
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
              </div> */}
            </ScheduleLogo>
            <ScheduleLogo img="/images/sidebar/world_cup.png">
              <img src="/images/sidebar/cup.png" alt="cup" className="w-[66px] h-[82px] self-center mt-5"/>
            </ScheduleLogo>
            <ScheduleLogo img="/images/sidebar/asia_cup.png">
            </ScheduleLogo>
            <ScheduleLogo img="/images/sidebar/int_match.png">
            </ScheduleLogo>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Sidebar;
