import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ itemIdx, data, isLink }) => {
  return (
    <>
      <div
        key={itemIdx}
        className="place-card w-full mx-auto px-3 py-5 rounded-lg text-tertiary"
      >
        <div className="content grid grid-cols-8 mx-auto gap-x-2">
          <div className="data-stasiun col-span-5">
            <div className="desc my-auto flex flex-col">
              {" "}
              <div className="nama-stasiun text-base font-bold truncate">
                {" "}
                {data.title}
              </div>
              <div className="jarak-stasiun text-sm font-medium">
                {" "}
                {data.distance} dari lokasi kamu
              </div>
            </div>
          </div>
          <div className="lihat-stasiun ml-3 col-span-3 my-auto">
            <div className="flex flex-col">
              <div
                className={`icon-transport flex gap-x-1 mb-1 ${
                  !isLink && "mx-auto gap-x-2"
                } `}
              >
                {data.armada.map((armada, armadaIdx) => {
                  return (
                    <>
                      <img
                        key={armadaIdx}
                        src={armada}
                        alt="icon rute"
                        className={`${isLink ? "w-5" : "w-6"}`}
                      />
                    </>
                  );
                })}
              </div>

              {isLink && (
                <Link
                  className="my-auto text-xs "
                  to={`/tempat/${data.id}`}
                  state={data}
                >
                  Lihat stasiun terdekat
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
