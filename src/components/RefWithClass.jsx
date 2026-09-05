import React, { Component, createRef } from 'react'
import styles from "./Navbar.module.css";

export default class RefWithClass extends Component {

    constructor(){
        super();
        this.inputRef = createRef()
        this.songRef = createRef()
        this.state = {
            song:false
        }
    }

    handleInput = () => {
        console.log(this.inputRef)
        this.inputRef.current.focus()
        console.log(this.inputRef.current.value)
    }

    playSong = () => {
        this.songRef.current.play()
    }

    pauseSong = () => {
        this.songRef.current.pause()
    }

    handleSong = () => {
        this.setState({ song: !this.state.song })
        if(!this.state.song){
            this.playSong()
        }
        else {
            this.pauseSong()
        }
    }

  render() {
    return (
      <div>
        <label htmlFor=''>Name</label>
        <input type="text" ref= {this.inputRef}></input>
        <button onClick={this.handleInput}>Click Me</button>

        <audio src="../../public/the_mountain.mp3" ref= {this.songRef}></audio>
        <button onClick={this.handleSong}>{this.state.song?"pause":"play"}</button>
        <img className={styles.songImage}
        src="https://img.magnific.com/free-vector/audio-song-equalizer-background-with-treble-sign-design_1017-51527.jpg?semt=ais_hybrid&w=740&q=80" 
        alt=""
        onClick={this.handleSong}
        ></img>
      </div>
    )
  }
}
