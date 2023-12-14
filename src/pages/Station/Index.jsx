import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { useLocation, useParams } from "react-router-dom";
import StationCard from "../../components/ListStations/StationCard";
import ListArmadas from "../../components/ListArmadas/Index";
import LoadingSpinner from "../../components/LoadingSpinner/Index";
import { RotateLoader } from "react-spinners";

const StationPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const { type } = useParams();
  const { stationName } = useParams();

  const data = location.state;
  console.log(data.kendaraan[`${stationName.toLocaleLowerCase()}`]);

  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 500);

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
            <section className="stasiun-content mt-[103px] w-11/12 pt-2 mx-auto">
              <h2 className="title leading-[normal] text-[20px] font-bold capitalize">
                {type}
              </h2>
              <div className="current-station mt-3">
                <StationCard data={data} isLink={true} />
              </div>

              <div className="armada-avail mt-6">
                <h2 className="title leading-[normal] mb-3 text-[20px] font-bold capitalize">
                  Armada yang tersedia
                </h2>
                <ListArmadas
                  datas={data.kendaraan[`${stationName.toLocaleLowerCase()}`]}
                />
              </div>
            </section>
          )}
        </Layout>
      </div>
    </>
  );
};

export default StationPage;
