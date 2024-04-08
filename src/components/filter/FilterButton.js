import React from "react";

function FilterButton({ name, index, value ,task,setPagenumber}) {
  return (
    <>
      <div className="form-check">
        <input
          onClick={()=>{
            setPagenumber(1);
            task(value)
          }}
          style={{ display: "hiddne" }}
          className="form-check-input"
          type="radio"
          name={name}
          id={` ${name} ${index}`}
        />
        <label className="btn btn-outline-primary" for={` ${name} ${index}`}>
          {value}
        </label>
      </div>
    </>
  );
}

export default FilterButton;
