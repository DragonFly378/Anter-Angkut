import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";
import LoadingSpinner from "../../components/LoadingSpinner/Index";
import { RotateLoader } from "react-spinners";
import PlaceCard from "../../components/ListPlaces/PlaceCard";
import ListStations from "../../components/ListStations/Index";
import DataStations from "../../datas/stasiun";

const PlacePage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isLoading, setIsLoading] = useState(true);

  // Split the pathname by '/'
  const pathParts = pathname.split("/").filter((part) => part !== "");

  // Get the root part (first non-empty part)
  const root = pathParts.length > 0 ? pathParts[0] : null;
  const data = location.state;

  console.log(data);
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
      <div className="stasiun-page">
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
            <section className="place-content mt-[103px] w-11/12 pt-2 mx-auto">
              <h2 className="title leading-[normal] text-[20px] font-bold capitalize">
                {root}
              </h2>
              <div className="current-place mt-3">
                <PlaceCard data={data} />
              </div>

              <div className="station-near mt-6">
                <div className="flex flex-col gap-y-1 mb-4">
                  <h3 className="title leading-[normal] text-base font-bold">
                    Stasiun / Halte terdekat dari
                  </h3>
                  <div className="px-2 py-1 text-base text-primary bg-light-soft rounded-lg text-center truncate capitalize">
                    {data.title}
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  {data.stasiunTerdekat.map((item, itemIdx) => {
                    return (
                      <>
                        <ListStations
                          key={itemIdx}
                          datas={DataStations}
                          searchValue={item}
                          root={root}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </Layout>
      </div>
    </>
  );
};

export default PlacePage;
