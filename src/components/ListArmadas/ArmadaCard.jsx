import React from "react";
import "./armada.scss";

const ArmadaCard = ({ data, itemIdx }) => {
  return (
    <>
      <div
        key={itemIdx}
        className="armada-card w-full m-auto px-3 py-5 rounded-lg"
      >
        <div className="content grid grid-cols-10 gap-x-1 mx-auto text-primary">
          <div className="data-stasiun col-span-7 flex flex-row gap-x-2 ">
            <div className="desc flex flex-col w-4/12">
              {" "}
              <div className="jarak-stasiun text-xs font-semibold">
                {" "}
                Stasiun akhir
              </div>
              <div className="nama-stasiun text-base font-bold truncate">
                {data.destination}
              </div>
            </div>
            <div className="status flex flex-col w-8/12 gap-y-1">
              <div className="title text-xs font-semibold">Rute</div>{" "}
              <div
                className={`title text-center px-3 w-11/12 mx-auto rounded-xl font-bold text-xs bg-blue-mid`}
              >
                {data.rute}
              </div>
              <div className={`title  text-xs`}>{data.id}</div>
            </div>
          </div>
          <div className="lihat-stasiun col-span-3 flex flex-col">
            {" "}
            <div className="jarak-stasiun text-xs font-semibold">
              {" "}
              Posisi Sekarang
            </div>
            <div className="nama-stasiun text-base font-bold">
              {data.currentPos}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArmadaCard;
