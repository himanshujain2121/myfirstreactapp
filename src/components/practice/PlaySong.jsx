import React, { useRef, useState } from "react";
import parvati from "../../../public/parvati.mp4";
import mahadev from "../../../public/mahadev.mp4";

const PlaySong = () => {
  const audioRef = useRef(null);
  // Declare Hook at the top level of the component
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleAudio = (trackSrc) => {
    const audio = audioRef.current;

    if (currentTrack !== trackSrc) {
      audio.src = trackSrc;
      audio.play();
      setCurrentTrack(trackSrc);
    } else {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>

      <audio ref={audioRef}></audio>

      {/* Wrap function call inside an anonymous arrow function */}
      <img
        width="100"
        height="100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5iUPdvba1884QhkKjpk53gk-I3iPof6xDBvQsc0kFyfgAi4SNJgE4mH7&s=10"
        alt="parvati"
        onClick={() => handleAudio(parvati)}
        style={{ cursor: "pointer" }}
      />

      <img
        width="100"
        height="100"
        src="https://i.ytimg.com/vi/CBqdVosM4gU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCp_x__SiKjaMhOINCvuoZKyvFf1w"
        alt="mahadev"
        onClick={() => handleAudio(mahadev)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default PlaySong;