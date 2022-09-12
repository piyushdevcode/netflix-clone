import React from 'react';
import logo from './logo.svg';
import './App.css';
import NetflixOriginals from './NetflixOriginals.jsx';
import Trending  from './Trending';
import ActionMovies from './ActionMovies';
import NavBar from './NavBar';
import Showcase from './Main';
import MoviesList from './MoviesList';
import { APIKEY } from './data';
import Trailer from './Trailer';
import TrailerContext from './context/TrailerContext'
function App() {
  const [trailerId,setTrailerId] = React.useState('')
  const [showModal,setModal] = React.useState(false)
  return (
    <div className='App'>
    <TrailerContext.Provider value = {{trailerId,setTrailerId,showModal,setModal}}>
    <NavBar/>
    <Showcase/>
    <MoviesList
       endpoint={`discover/tv/?api_key=${APIKEY}&with_network=123`}
       title = 'Netflix Originals' poster={true}/>
    <MoviesList
      endpoint={`trending/all/week?api_key=${APIKEY}&language=en-US`}
      title = 'Trending'/>
    <MoviesList
       endpoint={`discover/tv/?api_key=${APIKEY}&with_network=123`}
       title = 'Action'/>
    <MoviesList
       endpoint={`discover/movie/?api_key=${APIKEY}&with_genres=27`}
       title = 'Drama'/>
    <MoviesList
       endpoint={`discover/movie/?api_key=${APIKEY}&with_genres=12`}
       title = 'Recommended'/>
    <MoviesList
       endpoint={`discover/movie?api_key=${APIKEY}&with_genres=28`}
       title = 'Fighting'/>
       <Trailer TrailerId={trailerId}/>
       </TrailerContext.Provider>
    </div>
  )
}

export default App;
