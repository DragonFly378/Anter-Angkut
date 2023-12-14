import React from "react";
import Layout from "../../layout";
import ArmadaCategory from "../../components/ArmadaCategory/Index";
import { ListsArmadaCategory } from "../../datas";
import { useLocation } from "react-router-dom";

const PilihArmada = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="pilih-armada">
        <Layout>
          <div className="piliharmada-content mt-[103px] w-11/12 mx-auto">
            <h2 className="title leading-[normal] text-[20px] font-bold">
              {pathname === "/schedules"
                ? "Silahkan pilih armada"
                : "Mau naik apa hari ini?"}
            </h2>
            <ArmadaCategory datas={ListsArmadaCategory.all} />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default PilihArmada;
