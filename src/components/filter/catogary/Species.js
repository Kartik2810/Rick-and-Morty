import React from "react";
import FilterButton from "../FilterButton";
function Species({setPagenumber, setSpecies}) {
  let Species = [
    "Human",
    "Alien",
    "Humannoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
          {Species.map((value, index) => (
              <FilterButton
                task={setSpecies}
                setPagenumber={setPagenumber}
                name="Species"
                key={index}
                index={index}
                value={value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Species;
