import React from "react";
import { ReactComponent as Up } from "assets/icons/up.svg";
import { ReactComponent as Down } from "assets/icons/down.svg";

type Props = {
  img?: string;
  name?: string;
  country?: string;
  direction?: string;
  score1?: string;
  score2?: string;
  score3?: string;
  score4?: string;
  score5?: string;
  total?: string;
};

const PointItem: React.FC<Props> = ({
  img,
  name,
  country,
  direction,
  score1,
  score2,
  score3,
  score4,
  score5,
  total,
}) => {
  const flag_url = `/images/dashboard/flags/${country}.png`;
  return (
    <div className="flex items-center gap-5 w-full">
      <div className="flex w-[400px]">
        <img src={img} className="w-[50px] h-full rounded-lg" alt="player" />
        <div className="flex flex-col ml-[17px]">
          <p className="font-bold text-sm text-[#fff]">{name}</p>
          <div className="flex mt-auto">
            <img src={flag_url} alt="flag" className="w-[22px] h-full" />
            <p className="ml-2 uppercase font-medium text-sm text-[#fff]">
              {country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full font-medium text-base">
        <div className="flex items-center">
          {direction == "up" ? <Up /> : <Down />}
          <p className="ml-3">{score1}</p>
        </div>
        <p>{score2}</p>
        <p>{score3}</p>
        <p>{score4}</p>
        <p>{score5}</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default PointItem;
