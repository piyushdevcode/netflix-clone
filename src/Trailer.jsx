import React from 'react'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import TrailerContext from './context/TrailerContext'

function Trailer(props) {
  const [TrailerId,setTrailerId] = React.useState(props.TrailerId)
  const [YtPlayer,setYtPlayer] = React.useState()
  const MyModal = React.useRef()
  const {trailerId} = React.useContext(TrailerContext)
  const {showModal,setModal} = React.useContext(TrailerContext)
  
  // console.log("From Trailers",props);
  // console.log("From Trailers ID received: ",props.TrailerId);
  // console.log("From Trailers Context ID received: ",trailerId);
     // for Youtube opts
  const myOptions = {
    width: "100%",
    height: "600px",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
        loop: 1,
      },
  }
//   to get the youtube trailer id of given movie
const _onReady = (event) =>{
  setYtPlayer(event.target) ;
  console.log(event,"\n ele: ", YtPlayer);
  console.log("Modal:",MyModal);
  // console.log("Modal:",mModal);
}

  return (
    
     <>
   {/* <!-- Modal --> */}
   <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content bg-black">
      <div class="modal-header border border-0" >
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={()=>YtPlayer.pauseVideo()}></button>
      </div>
      <div class="modal-body">
  <Youtube key={trailerId} videoId={trailerId} opts={myOptions} onReady={
    (event) =>{
      setYtPlayer(event.target) ;
      console.log(event,"\n ele: ", YtPlayer);
      console.log(YtPlayer.i);
     
      
  }}/>
      </div>
    </div>
  </div>
</div>
    </>
    )
}

export default Trailer