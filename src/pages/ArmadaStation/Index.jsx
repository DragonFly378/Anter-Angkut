import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";
import SearchBar from "../../components/SearchBar/Index";
import Stations from "../../components/Stations/Index";
import { DataStations } from "../../datas";

const ArmadaStation = () => {
  const [searchValue, setSearchValue] = useState("");
  const { category } = useParams();
  console.log(category);

  return (
    <>
      <div className="armada-station-page ">
        <Layout>
          <section className="station-content mt-[103px] h-screen w-11/12 pt-2 mx-auto">
            <h2 className="title leading-[normal] text-[20px] font-bold">
              Mau ke{" "}
              {category == "commuterline" ||
              category == "lrt" ||
              category == "mrt" ||
              category == "krlbandara"
                ? "stasiun"
                : "halte"}{" "}
              mana hari ini?
              {category}
            </h2>

            <SearchBar
              placeholder={"Cari stasiun / halte"}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <div className="stasiun mt-8">
              <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
                {category ? "Stasiun / Halte" : "Stasiun terdekat kamu"}
              </h2>
              <Stations
                datas={DataStations}
                searchValue={searchValue}
                type={category}
              />
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default ArmadaStation;
