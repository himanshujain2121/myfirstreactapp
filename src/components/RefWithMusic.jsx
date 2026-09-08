import React, { useState, useRef } from 'react'

const RefWithMusic = () => {

      // Which song is currently playing
      const [currentSong, setCurrentSong] = useState(null);

      // Reference to audio element
      const musicRef = useRef(null);
  
      const handleSong = (data) => {
  
          // Same song clicked
          if (currentSong === data) {
  
              if (!musicRef.current.paused) {
                  musicRef.current.pause();
                  setCurrentSong(null);
              } else {
                  musicRef.current.play();
                  setCurrentSong(data);
              }
  
              return;
          }
  
          // Another song clicked
          musicRef.current.pause();
  
          musicRef.current.src = data;
  
          musicRef.current.play();
  
          setCurrentSong(data);
      };

  return (
    <div>
        <audio ref={musicRef}></audio>

<div>
    <img
        src="/song1.jpg"
        alt="Song 1"
        width="200"
        onClick={() => handleSong("../../public/the_mountain.mp3")}
    />

    <img
        src="/song2.jpg"
        alt="Song 2"
        width="200"
        onClick={() => handleSong("../../public/football.mp3")}
    />
</div>
    </div>
  )
}

export default RefWithMusic
