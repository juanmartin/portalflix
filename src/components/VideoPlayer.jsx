import React, { useEffect, useRef } from "react"
import videojs from "video.js"
import 'video.js/dist/video-js.css'


export default function VideoPlayer(props) {
  const { videoSrc } = props;
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: false, controls: true, preload: true }, () => {
      player.src(videoSrc);
    });

    return () => {
      player.dispose();
    };
  }, [videoSrc]);

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" playsInline />
    </div>
  );
}