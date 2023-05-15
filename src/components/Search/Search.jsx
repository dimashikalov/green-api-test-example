import React, { useState } from "react";
import "./search.css";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input className="searchInput" value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
