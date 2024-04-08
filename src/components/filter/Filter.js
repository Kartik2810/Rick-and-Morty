import React from "react";
import Gender from "./catogary/Gender.js";
import Species from "./catogary/Species.js";
import States from "./catogary/States.js";
import "./filter.css"

function Filter({ setStatus, setPagenumber, setGender , setSpecies }) {
  return (
    <>
      <div className="filter mb-5">
        <div className="fs-4 fw-bold mb-3">Filters</div>
        
        <div className="accordion" id="accordionExample">
          <Gender setPagenumber={setPagenumber} setGender={setGender} />
          <Species setSpecies={setSpecies} setPagenumber={setPagenumber}/>
          <States setPagenumber={setPagenumber} setStatus={setStatus} />
        </div>
      </div>
    </>
  );
}

export default Filter;
