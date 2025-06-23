import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import "./search.css";

export default function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
 

  
const fetchData = async () => {
  // Normalize searchTerm to avoid cache misses due to extra spaces or case differences
  const key = searchTerm.trim().toLowerCase();

  if (cache[key]) {
    console.log("Fetching data from cache...", key);
    setData(cache[key]);
    return;
  }
  //  const cachedData = localStorage.getItem(key);
  // if (searchTerm && cachedData) {
  //   console.log("Fetching data from localStorage...", key);
  //   setData(JSON.parse(cachedData)); 
  //   console.log(JSON.parse(cachedData))
  //   return;
  // }

  try {
    console.log("Fetching data from api...",key);
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + key
    );
    const jsonData = await response.json();
    
    setData(jsonData?.recipes);
// localStorage.setItem(key, JSON.stringify(jsonData?.recipes));
    // Update cache using functional update to avoid stale closures
    setCache((prev) => ({ ...prev, [key]: jsonData?.recipes }));
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <Fragment>
      <p className="searchTitle">Auto Complete Search bar</p>
      <div className="serach-input">
        <div>
          <input
            type="search"
            value={searchTerm}
          
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
          {showResults && (
            <div className="searchSuggestions">
              {data?.map((item, index) => (
                <span 
                //  onMouseOver={(e)=>setSearchTerm(e.target.innerText)}
                className="searchResult" key={index}>
                  {item.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
