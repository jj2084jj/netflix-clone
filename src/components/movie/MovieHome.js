import React,{ useState, useEffect} from 'react';
import Movies from "./Movies";
import Hero from "./Hero";
import Header from "./Header";
import axios from 'axios';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7d1720cb7712e1293395636990689f51";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
}

const MovieHome = () => {
  //api 상태보관
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setupcoming] = useState([]);

  useEffect(()=>{
    async function movieListItems(){
      await axios.get(`${URL}${endpoints.originals}`,{
        params: {
          api_key : API_KEY,
        }
      }).then(res => {
        setOriginals(res.data.results)
      })
      await axios.get(`${URL}${endpoints.trending}`,{
        params: {
          api_key : API_KEY,
        }
      }).then(res => {
        setTrending(res.data.results)
      })
      await axios.get(`${URL}${endpoints.popular}`,{
        params: {
          api_key : API_KEY,
          page:4,
        }
      }).then(res => {
        setPopular(res.data.results)
      })
      await axios.get(`${URL}${endpoints.upcoming}`,{
        params: {
          api_key : API_KEY,
          page:2
        }
      }).then(res => {
        setupcoming(res.data.results)
      })
    }
    movieListItems();
  },[])
  return (
    <>
     <Header></Header>
    <Hero movie={originals[Math.floor(3)]} />
      <Movies title="Netflix originals" movies={originals}/>
      <Movies title=" trending" movies={trending}/>
      <Movies title=" popular" movies={popular}/>
      <Movies title=" upcoming" movies={upcoming}/>
      </>
  )
}

export default MovieHome;