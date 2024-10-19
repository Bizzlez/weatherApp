import React, { useEffect, useRef } from 'react';
import { backgroundVids } from "./background/backgroundVid"; // Assuming backgroundVids is in the same directory

const Video = ({ code }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        const backgroundVideo = backgroundVids[getVideo(code)];
        video.src = backgroundVideo;
        video.load(); // Access load property on HTMLVideoElement
      }
    }, [code]);
    function getVideo(code: any) {
        switch (code) {
          case '01d':
            return 'sunnyVideo';
          case '01n':
            return 'nightVideo';
          case '02d':
            return 'cloudyVideo';
          case '02n':
            return 'nightVideo';
          case '03d':
            return 'cloudyVideo';
          case '03n':
            return 'cloudyVideo';
          case '04d':
            return 'cloudyVideo';
          case '04n':
            return 'cloudyVideo';
          case '09':
            return 'rainyVideo';
          case '10d':
            return 'rainyVideo';
          case '10n':
            return 'rainyVideo';
          case '11':
            return 'thunderVideo';
          case '13':
            return 'snowyVideo';
          default:
            return 'defaultVideo'; 
        }}





  return (
    //changes background video to match current weather conditions
    <video  ref={videoRef} autoPlay loop muted style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    }} >
        
    
    </video>
  );
};

export default Video;