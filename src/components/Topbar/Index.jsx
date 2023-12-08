import React from "react";
import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import img_profile from "../../assets/images/foto_profile.jpeg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <section className="topbar-section mx-auto max-w-md fixed py-5 left-0 right-0 top-0 z-40">
        <div className="topbar-brand w-11/12 py-3 flex my-auto justify-between mx-auto">
          <div className="button-ba my-auto">
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />{" "}
          </div>
          <Link to={"/account"} className="profile-pic w-11 ">
            <img
              src={img_profile}
              alt="foto profil"
              className="rounded-full object-cover w-[44px] h-[44px]"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Topbar;
