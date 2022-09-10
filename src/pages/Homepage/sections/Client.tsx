import ClientCarousel from "components/ClientCarousel";
import React from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Client = () => {
  return (
    <div className="bg-main">
      <div className="container-home pt-[78px] pb-[67px] flex flex-col justify-center relative h-[600px]">
        <h3 className="uppercase text-center text-5xl">
          Client{" "}
          <span className="text-[#008A81] font-zuumeroughbold text-5xl">
            Testimonials
          </span>
        </h3>
        <div className="pt-[58px] h-full">
          <ClientCarousel defaultItems={items} defaultActive={0} />
        </div>
      </div>
    </div>
  );
};

export default Client;
