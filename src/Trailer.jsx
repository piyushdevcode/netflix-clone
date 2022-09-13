import React from 'react'
import Youtube from "react-youtube"
import TrailerContext from './context/TrailerContext'

function Trailer(props) {
  const [YtPlayer,setYtPlayer] = React.useState()
  const {trailerId} = React.useContext(TrailerContext)
  
  // console.log("From Trailers",props);
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
      // console.log(event,"\n ele: ", YtPlayer);  
  }}/>
      </div>
    </div>
  </div>
</div>
    </>
    )
}
export default Trailer