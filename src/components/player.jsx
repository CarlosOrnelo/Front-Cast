import { useEffect, useState, useRef } from "react";

const Player = ({ currentEpisode, handleDetails }) => {

        // States
        const [volume, setVolume] = useState(35);
        const [timeProgress, setTimeProgress] = useState(0);
        const [properties, setProperties] = useState(currentEpisode);
        const [isPlaying, setIsPlaying] = useState(false);
        const [duration, setDuration] = useState(0);
    
        // Refs
        const audioRef = useRef(new Audio(null)); // Create a html object with an url audio;
        const intervalRef = useRef(); // Keep just one interval of 1 second, to prevent multiple refreshs on the state
        const colorProgressRef = useRef(0);
        const volumeProgressRef = useRef(0);
    
        // Styles
        const progressBarStyle = {
            background: `linear-gradient(90deg, red ${colorProgressRef.current}%, white ${colorProgressRef.current}%)`
        };
        const volumeBarStyle = {
            background: `linear-gradient(90deg, red ${volume}%, white ${volume}%)`
        };
    
        useEffect(() => {
            if(currentEpisode !== properties) {
                setIsPlaying(false);
                setTimeProgress(0);
                colorProgressRef.current = 0;
            };
            setProperties(currentEpisode);
        });
    
        useEffect(() => {
            if(properties) {
                audioRef.current.src = properties.audio;
                audioRef.current.volume = (volume / 100);
                setDuration(properties.audio_length_sec);
            };
        }, [properties]);
    
        const handleVolume = (actualVolume) => {
            volumeProgressRef.current = volume;
            setVolume(actualVolume);
            audioRef.current.volume = (actualVolume / 100);
        };
    
        const play = () => {
    
            clearInterval(intervalRef.current);
    
            if(!isPlaying) {
                audioRef.current.play();
                setIsPlaying(!isPlaying);
                handleTime();
            } else {
                audioRef.current.pause();
                setIsPlaying(!isPlaying)
            };
        };
    
        const handleTime = () => {
            intervalRef.current = setInterval(() => {
                setTimeProgress(audioRef.current.currentTime);
                colorProgressRef.current = Math.round((audioRef.current.currentTime / audioRef.current.duration) * 100);
    
                if(audioRef.current.ended) {
                    colorProgressRef.current = 0
                    setTimeProgress(0)
                    setIsPlaying(false);
                  };
            }, [1000]);
        };
    
        const onScrub = (time) => {
            audioRef.current.currentTime = time;
            colorProgressRef.current = Math.round((audioRef.current.currentTime / audioRef.current.duration) * 100);
            setTimeProgress(audioRef.current.currentTime);
        }
    
        const changeTime = (time) => {
            const { currentTime } = audioRef.current;
    
            if(currentTime + time < 0) {
                audioRef.current.currentTime = 0;
                colorProgressRef.current = 0;
                setTimeProgress(audioRef.current.currentTime)
            } else {
                audioRef.current.currentTime += time;
                colorProgressRef.current = Math.round((audioRef.current.currentTime / audioRef.current.duration) * 100);
                setTimeProgress(audioRef.current.currentTime);
            }
        };
    
        const convertTime = time => {
    
            if(!time) return '00:00';
    
            const hours = Math.floor(time % (3600*24) / 3600) > 9 ? Math.floor(time % (3600*24) / 3600) : '+' + Math.floor(time % (3600*24) / 3600);
            const minutes = Math.floor(time % 3600 / 60) > 9 ? Math.floor(time % 3600 / 60) : '0' + Math.floor(time % 3600 / 60);
            const seconds = Math.floor(time % 60) > 9 ? Math.floor(time % 60) : '0' + Math.floor(time % 60);
    
            if(hours > 1)
                return toString(hours + ':' + minutes + ':' + seconds);
            
            return minutes + ':' + seconds
        };
    
    return (
        <div className='l-footer__player-controls'>

        <div className='l-footer__player-controls__left'>

            <div className='current-thumbnail'>
                <img src={properties ? properties.thumbnail : null}/>
            </div>

            <div className='rewind-button'>
                <button type='submit' onClick={() => changeTime(-30)}>
                    <img src="images/player/forward-button.svg"/>
                </button>
            </div>
            <div className='play-button'>
                <button type='submit' onClick={() => play()}>
                    <img src={!isPlaying ? 'images/player/play-button.svg' : 'images/player/pause-button.svg'}/>
                </button>
            </div>
            <div className='forward-button'>
                <button type='submit' onClick={() => changeTime(30)}>
                    <img src="images/player/forward-button.svg"/>
                </button>
            </div>
        </div>

        <div className='l-footer__player-controls__center'>

            <div className='episode-title'>
                {properties ? <span onClick={() => handleDetails(properties)}>{properties.title_original}</span> : null}
            </div>


            <div className='progress-episode'>

                <div className='current-progress'>
                    {convertTime(timeProgress)}
                </div>

                <div className='progress-bar'>
                    <input 
                        type="range" 
                        value={timeProgress}
                        style={progressBarStyle} 
                        min='0'
                        max={audioRef.current.duration ? audioRef.current.duration : 0} 
                        onChange={(e) => onScrub(e.target.value)}
                    />
                </div>

                {/* Show remaining time just if episode is started */}
                <div className='remaining-time'>
                    {convertTime(duration - audioRef.current.currentTime)}
                </div>

            </div>
        </div>


        <div className='l-footer__player-controls__right'>
            
            <div className='volume-icon'>
                {volume ? (
                <button onClick={() => handleVolume(0)}>
                    <img src="images/player/volume-button.svg" alt=""/>
                </button>
                ) : (
                <button onClick={() => handleVolume(volumeProgressRef.current)}>
                    <img src="images/player/mute-button.svg" alt=""/>
                </button>
                )}
            </div>

            <div className='volume-bar'>
                <input 
                    type="range" 
                    min='0' 
                    max='100'
                    style={volumeBarStyle} 
                    value={volume} 
                    onChange={(e) => handleVolume(e.target.value)}
                />
            </div>
        </div>
    </div>
    )
};

export default Player;