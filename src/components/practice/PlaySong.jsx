import React, { useRef, useState } from "react";
import parvati from "../../../public/parvati.mp4";
import mahadev from "../../../public/mahadev.mp4";

const PlaySong = () => {
  let audioRef = useRef(null);


  let handleAudio = () => {
   
    if(audioRef.current.paused){
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
   
  } 

  return (
    <div>
      <audio ref={audioRef} src={parvati}></audio>
      <img
        width="100"
        height="100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5iUPdvba1884QhkKjpk53gk-I3iPof6xDBvQsc0kFyfgAi4SNJgE4mH7&s=10"
        alt=""
        onClick={handleAudio}
      />

    </div>
  );
};

export default PlaySong;
