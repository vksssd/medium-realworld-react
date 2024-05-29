import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

//incomplete to done later


const VideoPlayer = ({ url, width = '1000px', height = '500px', redirectUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);
  const playerWrapperRef = useRef(null);
  let hoverTimeout;
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setIsPaused(true);
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };


  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };


  useEffect(() => {
    const player = playerRef.current.getInternalPlayer();
    if (player) {
      player.volume = volume;
    }
  }, [volume]);

  const handleSeek = (seconds) => {
    const currentTimestamp = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTimestamp+seconds, 'seconds');
  };

  const handleProgressBarClick = (event) => {
    // Get the width of the progress bar
    const progressBarWidth = event.target.clientWidth;
    // Get the click position relative to the progress bar
    const clickX = event.clientX - event.target.getBoundingClientRect().left;
    // Calculate the new progress value as a percentage
    const newProgress = (clickX / progressBarWidth) * 100;

    // Determine the direction of seeking
    const direction = newProgress < progress ? 'backward' : 'forward';

    // Update the progress state with the new value
    setProgress(newProgress);

    // Calculate the new timestamp based on the clicked position
    const totalDuration = playerRef.current.getDuration();
    const currentTimestamp = playerRef.current.getCurrentTime();
    let newTimestamp;

    if (direction === 'backward') {
        // Seek backward
        newTimestamp = currentTimestamp - ((currentTimestamp / 100) * (progress - newProgress));
    } else {
        // Seek forward
        newTimestamp = currentTimestamp + ((totalDuration - currentTimestamp) / 100) * (newProgress - progress);
    }
    
    // Seek to the new timestamp
    playerRef.current.seekTo(newTimestamp, 'seconds');
};


  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 3100); // 2000ms = 2 seconds
  };


  return (
    <div style={{ ...styles.playerWrapper, width, height }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        controls={false}
        width="100%"
        height="100%"
        onPause={handlePause}
        onProgress={(progress) => setProgress(progress.played * 100)} // Update the progress state based on played percentage
        config={{
            youtube: {
              playerVars: { cc_load_policy: 0 }
            }
          }}
        style={styles.reactPlayer}
      />

      {isHovered && (
          <div style={styles.overlay} onClick={handlePlayPause}>
        <div style={styles.overlayTop}>Custom Top Overlay</div>
        <div style={styles.overlayMiddle}>
          {/* <div style={styles.overlaySide}></div> */}
          <div style={styles.clearMiddle}></div>
          {/* <div style={styles.overlaySide}></div> */}
        </div>
        <div style={styles.overlayBottom}></div>
        
    </div>
      
    )}

   {!isPlaying && (
    
        <div style={styles.overlay}>
          <div style={styles.overlayTop} onClick={handlePlayPause && handleMouseLeave}></div>
          <div style={styles.overlayMiddle}>
            {/* <div style={styles.overlaySide} onClick={handlePlayPause}></div> */}
            <div style={styles.clearMiddle}></div>
            {/* <div style={styles.overlaySide} onClick={handlePlayPause}></div> */}
          </div>
          <div style={styles.overlayBottom} onClick={handlePlayPause}></div>
        </div>
       )} 
      <div style={styles.controls}>
        <div>
            <div>
            <div style={styles.controlBar}>
            <div style={styles.progressBar}  onClick={handleProgressBarClick}>
            <div style={{ ...styles.progress, width: `${progress}%` }}></div>
    </div>
          {/* <progress max={1} value={progress}></progress> */}
          {/* <button onClick={handleFullscreen}>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button> */}
        </div>
            </div>
            <div>
        <button onClick={handlePlayPause} style={styles.button}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => handleSeek(10)} style={styles.button}>Seek to 10s</button>
        </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  playerWrapper: {
    position: 'relative',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    width:'100%',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  overlayTop: {
    flex: 2.2,
    backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent black
    cursor: 'pointer',
  },
  overlayMiddle: {
    display: 'flex',
    flex: 13, // Adjust the height of the clear section
  },
  overlaySide: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent black
    cursor: 'pointer',
  },
  clearMiddle: {
    flex: 14, // Adjust the width of the clear section
    backgroundColor: 'transparent',
  },
  overlayBottom: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent black
    cursor: 'pointer',
  },
  controls: {
    position: 'absolute',
    width:'100%',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'inline',
    gap: '10px',
  },
  controlBar: {
    // position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },

  progressBar: {
    width: '100%',
    height: '10px',
    backgroundColor: 'gray',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  progress: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: '5px',
    // width: `50%`,
    // width: `${progress}%`
  },

};

export default VideoPlayer;
