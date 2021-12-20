import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import ItemPage from "./Screens/ItemScreen/ItemPage";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "linear-gradient(189.77deg, #7135d8 14.69%, #542acc 85.31%)",
    white: "#fff",
    black: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:id"} element={<ItemPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
