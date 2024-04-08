import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Location from "./components/pages/Location.js"
import Episode from "./components/pages/Episode.js"
import CardDetail from "./components/cards/CardDetail.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetail />} />
        <Route path="/location" element={<Location/>} />
        <Route path="/location/:id" element={<CardDetail />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default App;
