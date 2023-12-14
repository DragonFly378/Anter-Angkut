import React from "react";
import { Link } from "react-router-dom";

const StationCard = ({ itemIdx, data, isLink }) => {
  // console.log(data);

  return (
    <>
      <div
        key={itemIdx}
        className="station-card w-full mx-auto px-3 py-5 rounded-lg"
      >
        <div className="content grid grid-cols-4 mx-auto gap-x-2">
          <div className="data-stasiun col-span-3 gap-x-2 flex flex-row text-primary">
            <div className="desc flex flex-col w-7/12  my-auto">
              {" "}
              <div className="nama-stasiun text-base font-bold truncate">
                {data.type == "stasiun" ? "St " : "Halte "}
                {data.title}
              </div>
              <div className="jarak-stasiun text-sm font-medium">
                {" "}
                {data.distance} dari lokasi kamu
              </div>
            </div>
            <div className="status flex flex-col w-4/12">
              <div className="title text-sm">Status</div>{" "}
              <div
                className={`title mx-auto px-5 rounded-xl font-semibold text-sm bg-${
                  data.status == "Lancar" ? "green-400" : "merah-terang"
                } text-${data.status == "Lancar" ? "primary" : "light-soft"}`}
              >
                {data.status}
              </div>
            </div>
          </div>
          {isLink && (
            <div className="lihat-stasiun col-span-1 my-auto text-xs text-right underline underline-offset-2">
              <Link
                to={{
                  pathname: `/${data.type}/${data.title}`,
                }}
                state={data}
              >
                Lihat stasiun
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StationCard;
