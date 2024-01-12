"use client"
import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios"; // Import Axios or your preferred HTTP client library

const SearchBar = ({ historyData, error }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState(historyData);
  const [displayedHistory, setDisplayedHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    setDisplayedHistory(searchHistory.slice(0, 5));
    setShowHistory(true);
  };

  const handleItemClick = (item) => {
    setSearchInput(item.title);
    setShowHistory(false);
  };

  const handleDeleteItem = async (id, event) => {
    event.stopPropagation();

    try {
      // Make an API call to delete the item
      await axios.delete(`https://dummyjson.com/products/${id}`);

      // Update the local state (searchHistory) with the updated data from the API
      const updatedHistory = searchHistory.filter((item) => item.id !== id);
      setSearchHistory(updatedHistory);

      const updatedDisplayedHistory = displayedHistory.filter(
        (item) => item.id !== id
      );
      setDisplayedHistory(updatedDisplayedHistory);

      // If the click event originated from the delete button, hide the search history
      if (!event.target.classList.contains("delete-item")) {
        setShowHistory(false);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      // Check if the click event originated from the delete button
      const isDeleteButton = event.target.classList.contains("delete-item");

      // If not, hide the search history
      if (!isDeleteButton) {
        setShowHistory(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch the latest search history from the API when showing the history
    if (showHistory) {
      const fetchLatestHistory = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          setSearchHistory(data.products);
          setDisplayedHistory(data.products.slice(0, 5));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchLatestHistory();
    }
  }, [showHistory]);

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="w-full bg-[#EFF0F5] rounded-[10px] h-[44px] flex gap-3 hover:shadow-lg">
        <input
          className="w-full bg-transparent px-4 py-3 outline-none"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleInputChange}
          onFocus={handleSearchClick}
        />
        <button
          className="bg-primary rounded-[10px] py-3 px-4 text-lg text-white"
          onClick={handleSearchClick}
        >
          <FiSearch />
        </button>
      </div>
      {showHistory && searchHistory.length > 0 && (
        <div className="absolute z-[999999] w-full top-full left-0 mt-2 bg-white border rounded shadow-md w-full">
          {displayedHistory.map((item) => (
            <div
              key={item.id}
              className="p-2 flex items-center justify-between cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item.title}
              <p
                className="bg-primary p-1 delete-item cursor-pointer"
                onClick={(event) => handleDeleteItem(item.id, event)}
              >
                X
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;