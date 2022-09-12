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
    <NetflixOriginals/>
    <Trending/>
    <ActionMovies/>
    <MoviesList
       endpoint={`discover/tv/?api_key=${APIKEY}&with_network=123`}
       title = 'My Title'/>
    <MoviesList
       endpoint={`discover/tv/?api_key=${APIKEY}&with_network=123`}
       title = 'Action'/>
    <MoviesList
       endpoint={`discover/tv/?api_key=${APIKEY}&with_network=123`}
       title = 'Acaaation'/>
       <Trailer TrailerId={trailerId}/>
       </TrailerContext.Provider>
    </div>
  )
}

export default App;
