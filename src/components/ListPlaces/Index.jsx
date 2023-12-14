import React from "react";
import "./place.scss";
import PlaceCard from "./PlaceCard";

const Places = ({ datas, searchValue }) => {
  return (
    <>
      <div className="lists-place flex flex-col gap-y-3">
        {datas
          ?.filter((item) =>
            item.title.toLowerCase().includes(searchValue?.toLowerCase())
          )
          .slice(0, 4)
          .map((item, itemIdx) => {
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
