import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/search-place/${searchValue}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="searchbar mt-4 flex shadow appearance-none border rounded-xl w-full py-5 px-4 bg-white gap-x-3"
    >
      <input
        className=" text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-11/12"
        id="searchPlace"
        name="searchPlace"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-hitam text-xl"
      />{" "}
    </form>
  );
};

export default SearchBar;
