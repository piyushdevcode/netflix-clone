import React from "react";
import Axios from "axios";
import axios from "axios";
import { IMGBASEURL, BASEURL,APIKEY } from "./data";
import "./Movies.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"


function MoviesList(props) {
    // api endpoint
    const endpoint = props.endpoint;
    const APIURL = BASEURL + endpoint;

  const [allMovies, setAllMovies] = React.useState([]);
  const [TrailerId,setTrailerId] = React.useState("")

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
    .catch(err=>{
        console.log(err);
    })
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="netflix-movieslist-container">
        {allMovies.map(function (ele) {
          // console.log(ele);
          const imagePath = IMGBASEURL + ele.backdrop_path;
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
      {TrailerId &&(
        <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      
      <Youtube videoId={TrailerId} opts={myOptions} onEnd={()=>{setTrailerId(null)}}/>
    </>
      )
      }
    </div>
  );
}

export default MoviesList;
