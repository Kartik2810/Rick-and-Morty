import React from 'react';
import Filter from "./components/filter/Filter.js";
import Pagination from "./components/pagination/Pagination.js";
import Card from "./components/cards/Card.js";
import { useEffect, useState } from "react";
import Search from "./components/search/Search.js";

function Home() {
    const [pagenumber, setPagenumber] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [fetchData, setFetchData] = useState([]);
  
    let { info, results } = fetchData;
  
    let API = `https://rickandmortyapi.com/api/character/?page=${pagenumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
    useEffect(() => {
      (async function () {
        try {
          let data = await fetch(API).then((res) => res.json());
          setFetchData(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [API]);
    return (
      <>
        <div className=" Arial">
          <h1 className='text-center fw-bold'>Characters</h1>
          <Search setSearch={setSearch} setPagenumber={setPagenumber} />
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Filter
                  setSpecies={setSpecies}
                  setGender={setGender}
                  setStatus={setStatus}
                  setPagenumber={setPagenumber}
                />
              </div>
              <div className="col-lg-9 col-12">
                <div className="row">
                  <Card page="/" results={results} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination pagenumber={pagenumber} setPagenumber={setPagenumber} />
      </>
    );
}

export default Home