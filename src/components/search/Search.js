import React, { useState } from "react";
import "./search.css";
function Search({ setSearch, setPagenumber }) {
  const [inputdata, setInputData] = useState();

  const submitHandle = (e) => {
    e.preventDefault()
    setSearch(inputdata)
    setPagenumber(1)
  };
  return (
    <>
      <form onSubmit={submitHandle} className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-2 mb-5">
        <input
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          name="inputdata"
          type="text"
          value={inputdata}
          className="input"
          placeholder="Search For Character..."
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
