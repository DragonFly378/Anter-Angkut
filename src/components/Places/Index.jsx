import React from "react";
import "./place.scss";
import PlaceCard from "./PlaceCard";

const Places = ({ datas }) => {
  return (
    <>
      <div className="lists-place flex flex-col gap-y-3">
        {datas?.map((item, itemIdx) => {
          return (
            <>
              <PlaceCard key={itemIdx} data={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Places;
