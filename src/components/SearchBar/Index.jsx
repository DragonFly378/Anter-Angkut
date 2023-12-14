import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SearchBar = ({
  placeholder,
  searchValue,
  setSearchValue,
  setIsGetSearch,
  isGetSearch,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();

  const pathname = location.pathname;

  // Split the pathname by '/'
  const pathParts = pathname.split("/").filter((part) => part !== "");

  // Get the root part (first non-empty part)
  const root = pathParts.length > 0 ? pathParts[0] : null;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(setSearchInput);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setIsGetSearch(true);
    setSearchValue(searchInput);
    navigate(
      `${
        root == null
          ? `search-place/${searchInput}`
          : `/${root}/${
              category ? `${category}/${searchInput}` : `${searchInput}`
            }`
      }`
    );
  };

  useEffect(() => {
    setSearchInput(searchValue);
    // console.log(pathname);
    // console.log(root);
    // console.log(category);
  }, []);

  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsGetSearch(false);
      clearTimeout(delay);
    }, 500);

    return () => clearTimeout(delay);
  }, [isGetSearch]); // useEffect runs only once on mount

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
