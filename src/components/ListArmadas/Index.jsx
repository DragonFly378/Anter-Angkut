import React from "react";
import ArmadaCard from "./ArmadaCard";

const ListArmadas = ({datas}) => {
  console.log(datas);
  return (
    <>
      <div className="lists-armadas flex flex-col gap-y-3 mx-auto">
        {datas?.map((item, itemIdx) => {
          return (
            <>
              <ArmadaCard key={itemIdx} data={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ListArmadas;
