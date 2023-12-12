import React from "react";
import Stations from "../../components/Stations/Index";
import { DataStations } from "../../datas";

const NearStation = () => {
  return (
    <>
      <div className="stasiun-terdekat mt-8">
        <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
          Stasiun terdekat kamu
        </h2>
        <Stations datas={DataStations} />
      </div>
    </>
  );
};

export default NearStation;
