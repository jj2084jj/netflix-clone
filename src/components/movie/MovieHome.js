import React,{ useState, useEffect} from 'react';
import Movies from "./Movies";
import Hero from "./Hero";
import Header from "./Header";
import axios from 'axios';
import Footer from "../main/Footer";
import { BsCircleFill } from 'react-icons/bs';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7d1720cb7712e1293395636990689f51";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  movie:"/tv",
}

const MovieHome = () => {
  //api 상태보관
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [video, setVideo] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
 
  useEffect(()=>{
    
    async function movieListItems(){
      let dd = 0
      await axios.get(`${URL}${endpoints.originals}`,{
        params: {
          api_key : API_KEY,
          language : "ko-KR"
        }
      }).then((res) => {
        setOriginals(res.data.results)
        console.log(res.data.results[Math.floor(2)].id)
        dd =res.data.results[Math.floor(2)].id
        console.log(dd)
        setVideo(dd)
        console.log(video)
        cc(dd)
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
      async function cc(id){
        console.log(id)
        let url = []
        await  axios.get(`${URL}/tv/${id}/videos`,{
          params: {
                    api_key : API_KEY,
                    language : "ko-KR"
                  }
        }).then(res => {
          console.log(res)
          res.data.results.map(item => {
            if(item.type==="Trailer"){
url.push(`https://www.youtube.com/embed/${item.key}`)
            }
            console.log(url)
          })
          setVideoUrl(url[0])
          console.log(videoUrl)
        }).catch(()=>{})
      }
    }
    movieListItems();
  },[]) 
  return (
    <>
     <Header></Header>
    <Hero movie={originals[Math.floor(2)]} video={videoUrl}/>
    <div style={{position:"relative",top:"-25rem",zIndex:"3",marginLeft:"50px"}}>
      <Movies title="최신 등록 콘텐츠" movies={originals}/>
      <Movies title="Netflix originals" movies={originals}/>
      <Movies title=" trending" movies={trending}/>
      <Movies title=" popular" movies={popular}/>
      <Movies title=" upcoming" movies={upcoming}/>
    </div>
<Footer></Footer>
      </>
  )
}

export default MovieHome;