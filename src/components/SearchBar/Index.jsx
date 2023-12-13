import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, searchValue, setSearchValue }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(setSearchInput);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearchValue(searchInput);
    navigate(`/search-place/${searchInput}`);
  };

  useEffect(() => {
    setSearchInput(searchValue);
  }, []);

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
        value={searchInput}
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
