import React, { useEffect, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow-1.svg";
import { ReactComponent as RightArrow } from "assets/icons/right-arrow-1.svg";
import { ReactComponent as GoldStar } from "assets/icons/Star-gold.svg";
import { ReactComponent as Star } from "assets/icons/Star-white.svg";

import "./style.css";

type Props = {
  defaultItems: number[];
  defaultActive: number;
};

const ClientCarousel: React.FC<Props> = ({ defaultItems, defaultActive }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setActive(defaultActive);
  }, []);

  const generateItems = () => {
    var items: any = [];
    var level;
    // console.log(active);
    for (var i = active - 1; i < active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = defaultItems.length + i;
      } else if (i >= defaultItems.length) {
        index = i % defaultItems.length;
      }
      level = active - i;
      items.push(<Item key={index} id={defaultItems[index]} level={level} />);
    }
    // console.log(items);
    return items;
  };

  const moveLeft = () => {
    var newActive = active;
    newActive--;
    let temp = newActive < 0 ? defaultItems.length - 1 : newActive;
    setActive(temp);
    setDirection("left");
  };

  const moveRight = () => {
    var newActive = active;
    let temp = (newActive + 1) % defaultItems.length;
    setActive(temp);
    setDirection("right");
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left " onClick={moveLeft}>
        <LeftArrow />
      </div>
      <ReactCSSTransitionGroup transitionName={direction}>
        {generateItems()}
      </ReactCSSTransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <RightArrow />
      </div>
    </div>
  );
};

type ItemProps = {
  level: number;
  id: number;
};

const Item: React.FC<ItemProps> = ({ level, id }) => {
  const className = "item level" + level;
  const imgClass = "img" + level;
  const nameClass = "name" + level;
  const contentClass = "content" + level;
  // console.log(level, "--", id);
  return (
    <div className={className}>
      <img
        src="/images/client/1.png"
        className={imgClass}
        alt="client"
      />
      <p className={nameClass}>Rahul</p>
      <div className="flex gap-1">
        <span className="text-[10px] leading-3">4.5</span>
        <div className="flex gap-[0.8px]">
          <GoldStar />
          <GoldStar />
          <GoldStar />
          <GoldStar />
          <Star />
        </div>
      </div>
      <p className={contentClass}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
    </div>
  );
};

export default ClientCarousel;
