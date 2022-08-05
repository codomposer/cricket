import React, {useContext} from "react";
import { ReactComponent as Wallet } from "assets/icons/wallet-white.svg";
import { ReactComponent as Ring } from "assets/icons/ring.svg";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as Menu } from "assets/icons/menu-icon.svg";

import { LayoutContext } from "./Root";

const Header = () => {
  const ctx = useContext(LayoutContext);

  const { navOpen, setNavOpen, navDocked } = ctx;

  return (
    <div className="flex items-center justify-center py-[23px] container-main bg-theme">
      <Menu className="lg:hidden top-4 left-5 cursor-pointer" onClick={() => setNavOpen(!navOpen)}/>
      <p>{navDocked}</p>

      <div className="flex lg:ml-0 ml-6">
        <input
          type="text"
          className="px-4 py-3 lg:w-[400px] w-[300px] rounded-l-[40px] bg-[#008A81]/10 text-[#fff]"
          placeholder="Search..."
        />
        <button className="flex items-center justify-center bg-[#008A81]/10 rounded-r-[40px] px-4">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
      <div className="flex text-[#fff] text-4 font-medium ml-auto items-center">
        <button className="flex items-center bg-primary rounded-[36px] px-6 py-3  hover:bg-primary/50 transition-all duration-150">
          <Wallet /> <span className="pl-1">Connect Wallet</span>
        </button>
        <span className="text-[#fff] ml-8">$0.052</span>
        <Ring className="ml-6" />
        <div className="flex items-center ml-6 border-[1px] rounded-[40px] px-2 py-[6px]">
          <img src="/images/sidebar/avatar.png" alt="avatar" />
          <ArrowDown className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
