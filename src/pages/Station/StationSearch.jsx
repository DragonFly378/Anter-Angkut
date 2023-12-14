import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";
import SearchBar from "../../components/SearchBar/Index";
import Stations from "../../components/ListStations/Index";
import { DataStations } from "../../datas";
import LoadingSpinner from "../../components/LoadingSpinner/Index";
import { RotateLoader } from "react-spinners";

const ArmadaStation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGetSearch, setIsGetSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { category } = useParams();
  // const { stationvalue } = useParams();
  // console.log(category);
  // console.log(stationvalue);

  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 1000);

    return () => clearTimeout(delay);
  }, []); // useEffect runs only once on mount

  return (
    <>
      <div className="armada-station-page ">
        <Layout>
          {isLoading ? (
            <LoadingSpinner
              Loader={RotateLoader}
              isLoading={isLoading}
              color="#4A90E2"
              size="20"
              style="flex flex-col items-center justify-center h-screen"
            />
          ) : (
            <section className="station-content mt-[103px]  w-11/12 pt-2 mx-auto">
              <h2 className="title leading-[normal] text-[20px] font-bold">
                Mau ke{" "}
                {category == "commuterline" ||
                category == "lrt" ||
                category == "mrt" ||
                category == "krlbandara"
                  ? "stasiun"
                  : "halte"}{" "}
                {category} mana hari ini?
              </h2>

              <SearchBar
                placeholder={"Cari stasiun / halte"}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setIsGetSearch={setIsGetSearch}
                isGetSearch={isGetSearch}
              />

              <div className="data-page flex flex-col ">
                {isGetSearch ? (
                  <LoadingSpinner
                    Loader={RotateLoader}
                    isLoading={isGetSearch}
                    color="#4A90E2"
                    size="20"
                    style="flex flex-col my-auto items-center justify-center h-[500px]"
                  />
                ) : (
                  <div className="stasiun-datas mt-8">
                    <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
                      {category ? "Stasiun / Halte" : "Stasiun terdekat kamu"}
                    </h2>
                    <Stations
                      datas={DataStations}
                      searchValue={searchValue}
                      type={category}
                    />
                  </div>
                )}
              </div>
            </section>
          )}
        </Layout>
      </div>
    </>
  );
};

export default ArmadaStation;
