import React from "react";
import Layout from "../../layout";
import "./home.scss";
import SummaryToday from "./SummaryToday";
import SearchBar from "../../components/SearchBar/Index";
import NearStation from "./NearStation";
import ArmadaCategory from "../../components/ArmadaCategory/Index";
import { ListsArmadaCategory } from "../../datas";
import TrendingPlace from "./TrendingPlace";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Layout>
          <section className="home-content mt-[83px] w-11/12 pt-2 mx-auto">
            <SummaryToday />
            <SearchBar placeholder={"Mau kemana hari ini?"} />
            <ArmadaCategory datas={ListsArmadaCategory.several} />
            <NearStation />
            <TrendingPlace />
          </section>
        </Layout>
      </div>
    </>
  );
};

export default HomePage;
