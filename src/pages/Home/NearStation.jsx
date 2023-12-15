import React from "react";
import DataStations from "../../datas/stasiun";
import ListStations from "../../components/ListStations/Index";

const NearStation = ({ searchValue }) => {
  return (
    <>
      <div className="stasiun-terdekat mt-8">
        <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
          Stasiun / Halte terdekat kamu
        </h2>
        <ListStations datas={DataStations} searchValue={searchValue} />
      </div>
    </>
  );
};

export default NearStation;
