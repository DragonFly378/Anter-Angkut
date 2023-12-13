import React from "react";
import "./station.scss";
import StationCard from "./StationCard";

const Stations = ({ datas }) => {
  return (
    <>
      <div className="lists-station flex flex-col gap-y-3">
        {datas?.map((item, itemIdx) => {
          return (
            <>
              <StationCard key={itemIdx} data={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stations;
