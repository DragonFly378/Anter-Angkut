import React from "react";
import "./place.scss";
import PlaceCard from "./PlaceCard";

const ListPlaces = ({ datas, searchValue }) => {
  return (
    <>
      <div className="lists-place flex flex-col gap-y-3 mx-auto">
        {datas?.filter((item) =>
          item.title.toLowerCase().includes(searchValue?.toLowerCase())
        ).length > 0 ? (
          datas
            ?.filter((item) =>
              item.title.toLowerCase().includes(searchValue?.toLowerCase())
            )
            .slice(0, 4)
            .map((item, itemIdx) => {
              return (
                <>
                  <PlaceCard key={itemIdx} data={item} isLink={true} />
                </>
              );
            })
        ) : (
          <>
            {" "}
            <div className="not-found text-center">
              Maaf tempat yang anda cari tidak ditemukan
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListPlaces;
