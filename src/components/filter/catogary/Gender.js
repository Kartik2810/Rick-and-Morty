import React from "react";
import FilterButton from "../FilterButton";

function Gender({ setGender, setPagenumber }) {
  let gender = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse "
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {gender.map((value, index) => (
              <FilterButton
                task={setGender}
                setPagenumber={setPagenumber}
                name="gender"
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

export default Gender;
