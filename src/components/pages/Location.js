import React, { useEffect, useState } from "react";
import Card from "../cards/Card.js";
import Input from "../filter/catogary/Input.js";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let char = await Promise.all(
        data.residents.map((value) => {
          return fetch(value).then((res) => res.json());
        })
      );
      setResults(char);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <Input name="Location" setID={setNumber} total={126} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;