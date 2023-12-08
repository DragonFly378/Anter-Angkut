import React from "react";
import { bottombars } from "../../datas";
import { Link } from "react-router-dom";
import "./bottombar.scss";

const Bottombar = ({ active }) => {
  // console.log(active);
  return (
    <>
      <section className="bottombar-section fixed max-w-md mx-auto bottom-0 left-0 right-0 z-50 w-full h-16 bg-light-soft border-t dark:bg-light-soft">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {bottombars.map((item, itemIdx) => {
            return (
              <ButtonBottomBar
                key={itemIdx}
                icon={item.icon}
                text={item.text}
                target={item.link}
                as={Link}
                active={active}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const ButtonBottomBar = ({
  icon,
  text,
  target,
  as: Component = "button",
  active,
}) => {
  return (
    <Component
      to={target}
      className={`inline-flex flex-col items-center justify-center px-5 hover:bg-peach group text-primary hover:text-primary
    ${active !== "/" && active === target && `bg-blue-soft `}`}
    >
      <div className="icon">
        <img src={icon} alt="icon-bottombar" className="icon-img" />
        {/* {icon} */}
      </div>
      <span className="text-sm ">{text}</span>
    </Component>
  );
};

export default Bottombar;
