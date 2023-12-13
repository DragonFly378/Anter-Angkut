import React from "react";
import Places from "../../components/Places/Index";
import { DataPlaces } from "../../datas";

const TrendingPlace = ({ searchValue }) => {
  return (
    <div className="tempat-trending mt-8">
      <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
        Tempat trending bulan ini
      </h2>
      <Places datas={DataPlaces} searchValue={searchValue} />
    </div>
  );
};

export default TrendingPlace;
