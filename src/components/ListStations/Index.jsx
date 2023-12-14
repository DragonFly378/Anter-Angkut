import React from "react";
import "./station.scss";
import StationCard from "./StationCard";

const Stations = ({ datas, searchValue, type }) => {
  return (
    <>
      <div className="lists-station flex flex-col gap-y-3">
        {datas
          ?.filter((item) => {
            if (type) {
              return (
                item.title.toLowerCase().includes(searchValue?.toLowerCase()) &&
                (item.type.toLowerCase().includes(type?.toLowerCase()) ||
                  item.armada.toLowerCase().includes(type?.toLowerCase()))
              );
            }
            return item.title
              .toLowerCase()
              .includes(searchValue?.toLowerCase());
          })
          .slice(0, 4)
          .map((item, itemIdx) => {
            return (
              <>
                <StationCard key={itemIdx} data={item} isLink={true} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Stations;
