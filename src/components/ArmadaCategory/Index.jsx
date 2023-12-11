import React from "react";
import { ListsArmadaCategory } from "../../datas";
import { Link } from "react-router-dom";

const ArmadaCategory = () => {
  return (
    <>
      <div className="kategori-armada mt-8">
        <div className="grid grid-cols-4 gap-x-1 mx-auto ">
          {ListsArmadaCategory.several.map((item, itemIdx) => {
            return (
              <>
                <Link
                  to={item.link}
                  key={itemIdx}
                  className="jenis-armada  grid-cols-1 rounded-sm bg-white shadow-lg text-primary flex flex-col "
                >
                  <div className="icon">{item.title}</div>
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
