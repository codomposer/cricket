import React from "react";
import "./style.css";

type DirectProps = {
  animation?: string;
  property?: string;
  children?: React.ReactNode;
};

const DirectButton: React.FC<DirectProps> = ({ animation, property, children }) => {
  const className = [
    animation,
    property,
    "DirectButton",
  ].join(" ");

  return (
    <button className={className}>
      <div className="button-children">{children}</div>
    </button>
  );
};

export { DirectButton };
