// eslint-disable-next-line
/* eslint-disable */

import React,{ useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/Login'
import Main from './components/main/Main'
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Header from "./components/Header";
import axios from 'axios';
import './App.css';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7d1720cb7712e1293395636990689f51";

// const endpoints = {
//   originals: "/discover/tv",
//   trending: "/trending/all/week",
//   now_playing: "/movie/now_playing",
//   popular: "/movie/popular",
//   top_rated: "/movie/top_rated",
//   upcoming: "/movie/upcoming",
// }


const App = () => {
  //api 상태보관
  // const [originals, setOriginals] = useState([]);
  // const [trending, setTrending] = useState([]);
  // const [popular, setPopular] = useState([]);
  // const [upcoming, setupcoming] = useState([]);

  //로그인 상태 
  const [userInfo , setUserInfo] = useState({
    id :"",
    password:""
  });


  // useEffect(()=>{
  //   async function movieListItems(){
  //     await axios.get(`${URL}${endpoints.originals}`,{
  //       params: {
  //         api_key : API_KEY,
  //       }
  //     }).then(res => {
  //       setOriginals(res.data.results)
  //     })
  //     await axios.get(`${URL}${endpoints.trending}`,{
  //       params: {
  //         api_key : API_KEY,
  //       }
  //     }).then(res => {
  //       setTrending(res.data.results)
  //     })
  //     await axios.get(`${URL}${endpoints.popular}`,{
  //       params: {
  //         api_key : API_KEY,
  //         page:4,
  //       }
  //     }).then(res => {
  //       setPopular(res.data.results)
  //     })
  //     await axios.get(`${URL}${endpoints.upcoming}`,{
  //       params: {
  //         api_key : API_KEY,
  //         page:2
  //       }
  //     }).then(res => {
  //       setupcoming(res.data.results)
  //     })
  //   }
  //   movieListItems();
  // },[])
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Main />} />
    <Route exact path="/login" element={<Login />} />
    </Routes>
    {/* <Header></Header> */}
    {/* <Hero movie={originals[Math.floor(Math.random() * originals.length)]} /> */}
      {/* <Movies title="Netflix originals" movies={originals}/> */}
      {/* <Movies title=" trending" movies={trending}/> */}
      {/* <Movies title=" popular" movies={popular}/> */}
      {/* <Movies title=" upcoming" movies={upcoming}/> */}
    </BrowserRouter>
  )
}

export default App