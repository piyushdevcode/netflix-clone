import React from 'react'
import Axios from "axios";
import { IMGBASEURL,APIKEY,BASEURL } from "./data";


const endpoint = `discover/tv/?api_key=${APIKEY}&with_genre=23`
const ActionURL = BASEURL + endpoint

function ActionMovies() {
    const [movies,setMovies] = React.useState([])
    React.useEffect(function(){
        async function fetchData(){
            const res = await Axios.get(ActionURL)
            setMovies(res.data.results)
        }
        fetchData()
    },[])
  return (
    <div>

      <h1>Action Movies</h1>
    <div className="netflix-movieslist-container">
      {movies.map((ele)=>{
            const IMGURL = IMGBASEURL + ele.backdrop_path
        return( <div className="netflix-movie">
          <img src={IMGURL} alt="" />
        </div>)
      })}

    </div>
    </div>
  )
}

export default ActionMovies