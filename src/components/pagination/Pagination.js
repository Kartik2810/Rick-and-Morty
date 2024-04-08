import React from "react";

function Pagination({ setPagenumber, pagenumber }) {
  const Prev = () => {
    if (pagenumber === 1) return;
    setPagenumber((x) => x - 1);
  };
  const Next = () => {
    setPagenumber((x) => x + 1);
  };
  return (
    <>
      <div className="container d-flex justify-content-center gap-5 my-5">
        <div onClick={Prev} className="btn btn-primary">
          Prev
        </div>
        <div onClick={Next} className="btn btn-primary">
          Next
        </div>
      </div>
    </>
  );
}

export default Pagination;
