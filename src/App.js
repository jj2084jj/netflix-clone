// eslint-disable-next-line
/* eslint-disable */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import MovieHome from "./components/movie/MovieHome";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/media/home" element={<MovieHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
