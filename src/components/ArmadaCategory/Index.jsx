import React from "react";
import { Link } from "react-router-dom";

const ArmadaCategory = ({ datas }) => {
  return (
    <>
      <div className="kategori-armada mt-5">
        <div className="grid grid-cols-4 gap-x-2 gap-y-3 mx-auto ">
          {datas.map((item, itemIdx) => {
            return (
              <>
                <Link
                  to={`/armada/${item.link}`}
                  key={itemIdx}
                  className="jenis-armada grid-cols-1 rounded-md bg-white shadow-[0_0px_13px_3px_rgba(188,188,188,0.25)] text-primary flex flex-col py-4 gap-y-2"
                >
                  <img
                    src={item.icon}
                    alt="icon-bottombar"
                    className="icon-img h-9 mx-auto "
                  />

                  {/* <div className="icon">{item.icon}</div> */}
                  <div className="title font-medium text-xs mx-auto">
                    {item.title}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArmadaCategory;
