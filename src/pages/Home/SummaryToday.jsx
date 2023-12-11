import React from "react";
import LocationIcon from "../../assets/icons/location_map.svg";

const SummaryToday = () => {
  return (
    <>
      <div className="summary-today mt-3 bg-white grid grid-cols-8 px-4 py-8 gap-x-1 rounded-xl ">
        <div className="desc col-span-6 flex flex-col text-hitam my-auto pr-1">
          <div className="name truncate font-extrabold text-lg">
            Hi, Muhammad Hafiz Hisbullah
          </div>
          <div className="location flex font-bold gap-x-1">
            {" "}
            <img
              src={LocationIcon}
              alt="icon location"
              className="icon-location w-5"
            />
            <div className="loc-name truncate font-normal">
              Rawamangun, Jakara Timur
            </div>
          </div>
        </div>
        <div className="weather-information col-span-2 flex gap-x-2 items-center text-primary ">
          <div className="line stroke-primary stroke-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="55"
              viewBox="0 0 2 55"
              fill="none"
            >
              <path
                d="M1 1L1 54"
                stroke="#01215B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="weather-desc flex flex-col">
            <div className="value font-bold text-xl mx-auto">29 &deg;C</div>
            <div className="status bg-blue-soft px-4 py-1 rounded-xl font-bold">
              Cerah
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryToday;
