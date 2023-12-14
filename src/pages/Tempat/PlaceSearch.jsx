import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { RotateLoader } from "react-spinners";
import { useLocation, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/Index";
import Stations from "../../components/Stations/Index";
import { DataPlaces, DataStations } from "../../datas";
import Places from "../../components/Places/Index";
import SearchBar from "../../components/SearchBar/Index";

const PlaceSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname);

  const { placeName } = useParams();
  // console.log(placeName);

  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 1000);

    return () => clearTimeout(delay);
  }, []); // useEffect runs only once on mount

  useEffect(() => {
    // console.log(location.state);
    if (placeName) {
      setSearchValue(placeName);
    }
  }, []);

  return (
    <>
      <div className="tempat-page">
        <Layout>
          {isLoading ? (
            <LoadingSpinner
              Loader={RotateLoader}
              isLoading={isLoading}
              color="#4A90E2"
              size="20"
            />
          ) : (
            <>
              <div className="place-search mt-[108px] w-11/12 mx-auto">
                <h1 className="text-2xl font-bold">Mau kemana hari ini?</h1>
                {/* <div className="text">{placeName}</div> */}

                <SearchBar
                  placeholder={placeName}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  root={pathname}
                />

                {placeName ? (
                  <div className="result text-base mt-2">
                    Menampilkan pencarian sekitaran{" "}
                    <span className="font-bold text-secondary">
                      {placeName}
                    </span>
                  </div>
                ) : (
                  ""
                )}

                <div className="tempat mt-8">
                  <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
                    {placeName ? "Tempat" : "Tempat terdekat kamu"}
                  </h2>
                  <Places datas={DataPlaces} searchValue={searchValue} />
                </div>

                <div className="stasiun mt-8">
                  <h2 className="title leading-[normal] text-[20px] font-bold mb-3">
                    {placeName ? "Stasiun / Halte" : "Stasiun terdekat kamu"}
                  </h2>
                  <Stations
                    datas={DataStations}
                    searchValue={searchValue}
                    type="stasiun"
                  />
                </div>
              </div>
            </>
          )}
        </Layout>
      </div>
    </>
  );
};

export default PlaceSearch;
