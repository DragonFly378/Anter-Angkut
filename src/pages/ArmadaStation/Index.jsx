import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";

const ArmadaStation = () => {
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
            </h2>
            {category}
          </section>
        </Layout>
      </div>
    </>
  );
};

export default ArmadaStation;
