import React, { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ReactComponent as Wallet } from "assets/icons/wallet-white.svg";
import { ReactComponent as Ring } from "assets/icons/ring.svg";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as Menu } from "assets/icons/menu-icon.svg";

import { LayoutContext } from "./Root";
import { providerOptions } from "config/ProvideOptions";

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

const Header = () => {
  const ctx = useContext(LayoutContext);

  const { navOpen, setNavOpen, navDocked } = ctx;

  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      // @ts-ignore
      const account: any = window.ethereum.selectedAddress;
      setAccount(account);
      console.log(account);
      // @ts-ignore
      const balance = await library.getBalance(account);
      console.log(ethers.utils.formatEther(balance));
      setBalance(ethers.utils.formatEther(balance));
    } catch (error: any) {
      setError(error);
    }
  };

  const refreshState = () => {
    // @ts-ignore
    setAccount();
    setBalance("0");
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <div className="flex items-center justify-center py-[23px] container-main bg-theme flex-wrap gap-[23px]">
      <div className="flex items-center px-4">
        <Menu
          className="lg:hidden ml-4 cursor-pointer w-8 md:w-16 h-full items-center"
          onClick={() => setNavOpen(!navOpen)}
        />
        <div className="flex">
          <input
            type="text"
            className="px-4 py-3 w-52 lg:w-[400px] md:w-[300px] rounded-l-[40px] bg-[#008A81]/10 text-[#fff] lg:ml-0 ml-4"
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
      </div>

      <div className="flex text-[#fff] text-4 font-medium md:ml-auto items-center">
        {!account ? (
          <button
            className="flex items-center bg-primary rounded-[36px] px-3 md:px-6 py-1 md:py-3  hover:bg-primary/50 transition-all duration-150"
            onClick={connectWallet}
          >
            <Wallet className="min-w-[26px] h-full" />
            <span className="pl-1">Connect Wallet</span>
          </button>
        ) : (
          <button
            className="flex items-center bg-primary rounded-[36px] px-3 md:px-6 py-1 md:py-3  hover:bg-primary/50 transition-all duration-150"
            onClick={disconnect}
          >
            <Wallet className="min-w-[26px] h-full" />
            <span className="pl-1">Disconnect</span>
          </button>
        )}
        <span className="text-[#fff] ml-2 md:ml-8">{balance + " "}MATIC</span>
        <Ring className="ml-2 md:ml-6" />
        <div className="flex items-center ml-2 md:ml-6 border-[1px] rounded-[40px] px-2 py-[6px]">
          <img src="/images/sidebar/avatar.png" alt="avatar" />
          <ArrowDown className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
