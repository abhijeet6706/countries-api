// import Header from "./components/Header";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
// import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// import { Outlet } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  
  return (
    <main className={` ${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      
      <CountriesList query={query} />
    </main>
  );
}
