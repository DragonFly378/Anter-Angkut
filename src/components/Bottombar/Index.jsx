import React from "react";

import { Link } from "react-router-dom";
import "./bottombar.scss";
import { bottombars } from "../../datas";
import DataStations from "../../datas/stasiun";

const Bottombar = ({ active }) => {
  // console.log(active);
  return (
    <>
      <section className="bottombar-section fixed max-w-md mx-auto bottom-0 left-0 right-0 z-50 w-full h-[72px] bg-light-soft border-t dark:bg-light-soft">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {bottombars.map((item, itemIdx) => {
            return (
              <ButtonBottomBar
                key={itemIdx}
                icon={item.icon}
                text={item.text}
                target={item.link}
                active={active}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const ButtonBottomBar = ({ icon, text, target, active }) => {
  // const datas = DataStations;
  return (
    <Link
      to={target}
      state={DataStations}
      className={`inline-flex flex-col items-center justify-center px-5 gap-y-1 hover:bg-peach group text-primary hover:text-primary
    ${active !== "/" && active === target && `bg-blue-soft `}`}
    >
      <div className="icon">
        <img src={icon} alt="icon-bottombar" className="icon-img w-8" />
        {/* {icon} */}
      </div>
      <span className="text-xs">{text}</span>
    </Link>
  );
};

export default Bottombar;
