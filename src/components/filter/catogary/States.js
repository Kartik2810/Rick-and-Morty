import React from "react";
import FilterButton from "../FilterButton";
function States({setStatus,setPagenumber}) {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Status
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {status.map((value, index) => (
              <FilterButton
                task={setStatus}
                setPagenumber={setPagenumber}
                key={index}
                name="status"
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

export default States;
