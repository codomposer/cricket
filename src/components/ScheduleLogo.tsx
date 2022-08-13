import React from "react";

type Props = {
  img?: string;
  children?: React.ReactNode;
};

const ScheduleLogo: React.FC<Props> = ({ img, children }) => {

  return (
    <>
      <div className="flex flex-col w-[221px] h-[218px] relative cursor-pointer hover:animate-pulse" style={{ backgroundImage: `url(${img})` }}>
        {children}
      </div>
    </>
  );
};

export default ScheduleLogo;
