import React from 'react'
import Axios from "axios";
import { IMGBASEURL,APIKEY,BASEURL } from "./data";


const endpoint = `trending/all/week?api_key=${APIKEY}&language=en-US`
const TrendingNow = BASEURL + endpoint
function Trending() {
    const [allMovies, setAllMovies] = React.useState([]);
    React.useEffect(function () {
      async function fetchData() {
        const res = await Axios.get(TrendingNow);
        const data = res.data.results;
        setAllMovies(data);
      }
      fetchData();
    }, []);
    return (
      <div>
        <h1>Trending Now</h1>
        <div className="netflix-movieslist-container">
          {allMovies.map(function (ele) {
              // console.log(ele);
            const imagePath = IMGBASEURL + ele.backdrop_path;
            return (
              <div className="netflix-movie">
                <img src={imagePath} alt={ele.name}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
export default Trending