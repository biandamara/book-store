import React from "react";

// import styles
import css from "../Assets/Styles/SearchBar.module.css";

function Search() {
  return (
    <>
      <div>
        <input className={css.searchinput} type="text" placeholder="Search" />
      </div>
    </>
  );
}

export default Search;
