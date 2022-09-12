import React from "react";
import Axios from "axios";
import axios from "axios";
import { IMGBASEURL, BASEURL,APIKEY } from "./data";
import "./Movies.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const endpoint = `discover/tv/?api_key=${APIKEY}&with_network=123`;
const netflixOriginals = BASEURL + endpoint

function NetflixOriginals() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [TrailerId,setTrailerId] = React.useState("")
  React.useEffect(function () {
    async function fetchData() {
      const res = await Axios.get(netflixOriginals);
      const data = res.data.results;
      setAllMovies(data);
    }
    fetchData();
  }, []);
  const myOptions = {
    width: "100%",
    height: "600px",
  }
  function playTrailer(data){
    console.log("heres trailer",data);
    console.log(typeof(data.name));
    // const mname = 'Hulk';
    const mname = data.name || data.original_name || data.title;
    movieTrailer(mname)
    .then(output=>{
      console.log(output);
      const search = new URLSearchParams(new URL(output).search)
      console.log(search);
      const vid_Id = search.get("v")
      console.log(vid_Id);
      setTrailerId(vid_Id)
    })
    .catch()
    axios.get(" https://www.themoviedb.org/search?query=Cobra+Kai").then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h3>Netflix Originals</h3>
      <div className="netflix-movieslist-container">
        {allMovies.map(function (ele) {
          // console.log(ele);
          const imagePath = IMGBASEURL + ele.poster_path;
          return (
            <div className="netflix-movie">
              <img src={imagePath} alt={ele.name} onClick={()=>{
                playTrailer(ele)
              }}></img>
            </div>
          );
        })}
      </div>
      {/* For movie Trailers */}
      {/* {<Youtube videoId={TrailerId} opts={myOptions}/>} */}
    </div>
  );
}

export default NetflixOriginals;
