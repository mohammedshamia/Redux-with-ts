import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import ItemPage from "./Screens/ItemPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:id"} element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
