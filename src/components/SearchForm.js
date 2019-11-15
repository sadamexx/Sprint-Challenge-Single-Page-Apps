import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [cartoon, setCartoon] = useState([]);
  const [searchTerm, setSearchTerm]= useState ("");
  
  // useEffect (() => {
  //   const results = results.filter(name =>
  //     name.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  // }, [searchTerm]);
  
 
  return (
    <section className="search-form">
     {/* <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
     />
      {searchResults.map(item =>(
        
      )} */}
    </section>
  );
}
