import React from 'react'
import { IMGBASEURL,APIKEY,BASEURL } from "./data";
import Axios from 'axios';

const endpoint = `trending/all/week?api_key=${APIKEY}&language=en-US`
const TrendingNow = BASEURL + endpoint
function Showcase() {
    const [MainMovie, setMovie] = React.useState({});
    const [AllMovies, setAllMovie] = React.useState([]);
    React.useEffect(function () {
      async function fetchData() {
        const res = await Axios.get(TrendingNow);
        const random_idx = Math.floor(Math.random()*20)
        setAllMovie(res.data.results);
        setMovie(res.data.results[random_idx]);
        // console.log(res);
    }
    fetchData();
}, []);
React.useEffect(() => {
    const interval = setInterval(() => {
        const random_idx = Math.floor(Math.random()*20)
        // console.log("All movies:", AllMovies);
        // console.log("Movie",AllMovies[random_idx]);
            setMovie(AllMovies[random_idx]);
        
    }, 10000);
  
    return () => clearInterval(interval);
  }, [MainMovie]);
return (
    <div className="main-img-container">
        <img src= {IMGBASEURL+MainMovie.backdrop_path} alt="" />
        <div className="main-img-after"></div>
        <div className="main-details">
            <h1>{MainMovie.name|| MainMovie.title}</h1>
            <p className='main-overview'>{MainMovie.overview}</p>
        </div>
    </div>
    
  )
}

export default Showcase