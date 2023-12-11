import React from "react";
import Layout from "../../layout";
import "./home.scss";
import SummaryToday from "./SummaryToday";
import SearchBar from "../../components/SearchBar/Index";
import NearStation from "./NearStation";
import ArmadaCategory from "../../components/ArmadaCategory/Index";

const HomePage = () => {
  return (
    <>
      <div className="home-page ">
        <Layout>
          <section className="home-content mt-[83px] h-screen w-11/12 pt-2 mx-auto">
            <SummaryToday />
            <SearchBar />
            <ArmadaCategory />
            <NearStation />
          </section>
        </Layout>
      </div>
    </>
  );
};

export default HomePage;
