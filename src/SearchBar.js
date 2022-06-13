import React, { useState } from "react";
import "./styles.css";

const SearchBar = (props) => {
  const [searchValue, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }
  // for clearing the input
  function handleClear() {
    setSearch("");
  }
  // condition to render the button only if something typed
  const isButton = searchValue.length > 0;
  //  custom styles
  const divStyle = {
    border: "2px groove black",
    margin: "15px auto",
    height: "50px",
    width: "180px",
    textAlign: "center"
  };
  //  filtering items based on the search value provided
  const filtteams = props.items.filter((team) => {
    return team.includes(searchValue);
  });
  return (
    <div>
      <h1>Search Bar</h1>
      <input value={searchValue} onChange={handleChange}></input>
      <br />
      <br />

      {isButton && <button onClick={handleClear}>Clear</button>}

      <h2>
        {
          /* rendering the filtered items */
          filtteams.map((team) => {
            return (
              <div className="card" style={divStyle} key={team}>
                {team}
              </div>
            );
          })
        }
      </h2>
    </div>
  );
};

export default SearchBar;
