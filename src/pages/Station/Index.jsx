import React from "react";
import Layout from "../../layout";
import { useLocation, useParams } from "react-router-dom";
import StationCard from "../../components/ListStations/StationCard";

const StationPage = () => {
  const location = useLocation();
  const { type } = useParams();
  const { stationName } = useParams();

  const data = location.state;
  console.log(data.kendaraan[`${stationName.toLocaleLowerCase()}`]);

  return (
    <>
      <div className="stasiun-page">
        <Layout>
          <section className="stasiun-content mt-[103px] w-11/12 pt-2 mx-auto">
            <h2 className="title leading-[normal] text-[20px] font-bold capitalize">
              {type}
            </h2>
            <div className="current-station mt-3">
              <StationCard data={data} isLink={true} />
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default StationPage;
