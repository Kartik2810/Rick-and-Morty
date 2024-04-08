import React from "react";

function Input({ total, name, setID }) {
  return (
    <>
      <div class="input-group ">
        <select
          onChange={(e) => setID(e.target.value)}
          class="form-select"
          id={name}
        >
          <option selected>Choose...</option>

          {[...Array(total).keys()].map((value) => {
            return (
              <option value={value + 1}>
                {name} - {value + 1}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Input;
