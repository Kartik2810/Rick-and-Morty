import React, { useEffect, useState } from "react";
import Card from "../cards/Card.js";
import Input from "../filter/catogary/Input.js";

const Episode = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let char = await Promise.all(
        data.characters.map((value) => {
          return fetch(value).then((res) => res.json());
        })
      );
      setResults(char);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-1">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <Input setID={setID} name="Episode" total={51}/>
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <Card page="/episode/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
