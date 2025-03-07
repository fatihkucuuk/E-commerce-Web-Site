// Search.jsx
import React, { useState } from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";

const Search = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation();
  const handleSearch = () => {
    setSearchTerm(searchValue);
  };

  return (
    <div className="search">
      <div className="search-box">
        <div className="flex">
          <input
            type="text"
            className="search-input"
            placeholder={t('product.search.text')}
            value={searchValue}
            id="searchProduct"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchbtn searchbtn-lg searchbtn-primary"
            id="searchButton"
            onClick={handleSearch}
          >
            {t('product.search.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;