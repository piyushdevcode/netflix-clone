import React from "react";
import Axios from "axios";
import axios from "axios";
import { IMGBASEURL, BASEURL,APIKEY } from "./data";
import "./Movies.css";
import movieTrailer from "movie-trailer"
import Trailer from "./Trailer";
import TrailerContext from "./context/TrailerContext";


function MoviesList(props) {
    // api endpoint
    const endpoint = props.endpoint;
    const APIURL = BASEURL + endpoint;

  const [allMovies, setAllMovies] = React.useState([]);
  const {setTrailerId} = React.useContext(TrailerContext)
  const {showModal,setModal} = React.useContext(TrailerContext)

  React.useEffect(function () {
    async function fetchData() {
      const res = await Axios.get(APIURL);
      const data = res.data.results;
      setAllMovies(data);
    }
    fetchData();
  }, []);

  // for Youtube opts
  const myOptions = {
    width: "100%",
    height: "600px",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
      },
  }
  // to get the youtube trailer id of given movie
  function playTrailer(data){
    // console.log("heres trailer",data);
    const mname = data.name || data.original_name || data.title;
    movieTrailer(mname)
    .then(output=>{
      // console.log(output);
      const search = new URLSearchParams(new URL(output).search)
      // console.log(search);
      const vid_Id = search.get("v")
      // console.log(vid_Id);
      setTrailerId(vid_Id)
    })
    .catch(err=>{
      setTrailerId("KS2EztRMuRw") // Some placeholder ID
        console.log(err);
    })
  }
  return (
    <div>
      <h3 className="category-title">{props.title}</h3>
      <div className="netflix-movieslist-container">
        {allMovies.map(function (ele) {
          // console.log(ele);
          const imgId = props.poster ? ele.poster_path : ele.backdrop_path
          const imagePath = IMGBASEURL + imgId;
          return (
            <>
            <div className="netflix-movie">
              <img src={imagePath} alt={ele.name} ></img>
              <div className="more-details">
                <span classname="title">{ele.name || ele.title}</span>
                <button type="button" class={`btn btn-primary btn-trailer ${props.poster? "btn-poster":""}`} data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>{
                  setModal(true)
                  playTrailer(ele)
                }}>Play Trailer</button>
                </div>
            </div>
                </>
          );
        })}
      {/* <!-- Button trigger modal --> */}
      </div>


      {/* <Trailer TrailerId={TrailerId}/> */}
      {/* For movie Trailers */}
    </div>
  );
}

export default MoviesList;
