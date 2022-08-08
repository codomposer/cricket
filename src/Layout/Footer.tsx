import React from "react";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Ball } from "assets/icons/ball2.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "assets/icons/youtube.svg";
import { ReactComponent as Discord } from "assets/icons/discord.svg";

const Footer = () => {
  return (
    <div className="bg-main container-main">
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-6">
        <div className="flex flex-wrap md:flex-nowrap bg-secondary/10 rounded-[20px] px-10 py-10 md:px-[76px] md:py-[61px] justify-between xl:justify-start gap-10 xl:gap-[155px] w-full xl:basis-3/4">
          <div className="flex flex-col">
            <h1 className="text-[#fff] font-zuumeroughbolditalic text-[80px] leading-[90px]">
              LOGO
            </h1>
            <div className="mt-2 flex">
              <Mail />
              <div className="flex flex-col ml-3">
                <p className="font-normal text-base text-[#fff]">
                  Reach out for partnership
                </p>
                <p className="font-bold text-base text-primary">
                  info@yoursite.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4>Company</h4>
            <div className="flex flex-col mt-[18px] gap-5">
              <div className="flex">
                <Ball />
                <p className="font-normal text-sm text-[#fff] ml-3">
                  Dashboard
                </p>
              </div>
              <div className="flex">
                <Ball />
                <p className="font-normal text-sm text-[#fff] ml-3">
                  Whitepaper
                </p>
              </div>
              <div className="flex">
                <Ball />
                <p className="font-normal text-sm text-[#fff] ml-3">About us</p>
              </div>
              <div className="flex">
                <Ball />
                <p className="font-normal text-sm text-[#fff] ml-3">
                  Buy Crypto
                </p>
              </div>
              <div className="flex">
                <Ball />
                <p className="font-normal text-sm text-[#fff] ml-3">
                  Terms {"&"} Condition
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4>Follow us</h4>
            <div className="flex flex-col mt-[18px] gap-5">
              <div className="flex">
                <Facebook />
                <p className="font-normal text-sm text-[#fff] ml-3">Facebook</p>
              </div>
              <div className="flex">
                <Instagram />
                <p className="font-normal text-sm text-[#fff] ml-3">
                  Instagram
                </p>
              </div>
              <div className="flex">
                <Youtube />
                <p className="font-normal text-sm text-[#fff] ml-3">Youtube</p>
              </div>
              <div className="flex">
                <Discord />
                <p className="font-normal text-sm text-[#fff] ml-3">Discord</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-primary pl-10 pr-8 py-[42px] rounded-[20px] w-full md:min-w-[444px] xl:basis-1/4">
          <h4>Subscribe Newsletter</h4>
          <div className="flex flex-col mt-7 gap-[17px] items-center">
            <button className="w-full border-[1px] border-[#fff] text-center py-[14px] rounded-[50px]">
              <span className="font-normal text-base text-[#fff]">Name*</span>
            </button>
            <button className="w-full border-[1px] border-[#fff] text-center py-[14px] rounded-[50px]">
              <span className="font-normal text-base text-[#fff]">
                Email Address*
              </span>
            </button>
            <button className="w-full text-center py-[14px] bg-secondary rounded-[50px]">
              <span className="font-normal text-base text-[#fff]">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-9 pb-[69px]">
        <p className="font-normal text-base text-[#fff]">
          Ⓒ Scorefam 2022. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
