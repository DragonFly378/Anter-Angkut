import React from "react";
import "./station.scss";
import StationCard from "./StationCard";

const Stations = ({ datas, searchValue }) => {
  return (
    <>
      <div className="lists-station flex flex-col gap-y-3">
        {datas
          ?.filter((item) =>
            item.title.toLowerCase().includes(searchValue?.toLowerCase())
          )
          .slice(0, 4)
          .map((item, itemIdx) => {
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
