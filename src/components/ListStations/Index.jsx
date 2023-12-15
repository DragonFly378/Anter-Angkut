import React from "react";
import "./station.scss";
import StationCard from "./StationCard";
import { useLocation } from "react-router-dom";

const ListStations = ({ datas, searchValue, type, root }) => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(searchValue);
  return (
    <>
      <div className="lists-station flex flex-col gap-y-3 mx-auto w-full">
        {pathname == "/" ? (
          <>
            {datas?.slice(0, 4).map((item, itemIdx) => {
              return (
                <>
                  {console.log(item)}
                  <StationCard key={itemIdx} data={item} isLink={true} />
                </>
              );
            })}
          </>
        ) : (
          <>
            {datas?.filter((item) => {
              if (type) {
                return (
                  item.title
                    .toLowerCase()
                    .includes(searchValue?.toLowerCase()) &&
                  (item.type.toLowerCase().includes(type?.toLowerCase()) ||
                    item.armada.toLowerCase().includes(type?.toLowerCase()))
                );
              }
              return item.title
                .toLowerCase()
                .includes(searchValue?.toLowerCase());
            }).length > 0 ? (
              datas
                ?.filter((item) => {
                  if (type) {
                    return (
                      item.title
                        .toLowerCase()
                        .includes(searchValue?.toLowerCase()) &&
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
                      {console.log(item)}
                      <StationCard key={itemIdx} data={item} isLink={true} />
                    </>
                  );
                })
            ) : (
              <>
                {!root && (
                  <div className="not-found text-center">
                    Maaf data {type} tidak ditemukan
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ListStations;
