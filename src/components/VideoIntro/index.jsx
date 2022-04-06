import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const VideoIntro = ({url}) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo(playVideo => !playVideo);
    
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  useEffect(() => {    
    videoRef.current?.load();
  }, [url]);

  return (
    <div className={styles.video}>
      <video
        ref={videoRef}
        loop
        controls={false}
        muted
      >
        <source src={`https://youtu.be/4IlWl4hm4Ys`} type="video/mp4" />
      </video>
      {/* <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      /> */}
      <div className={cn(styles.video_overlay, 'flex_center')}>
        <button
          className={cn(styles.video_overlay_circle, 'flex_center')}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className={styles.video_icon} />
          ) : (
            <BsFillPlayFill className={styles.video_icon} />
          )}
        </button>
      </div>
    </div>
  );
}

export default VideoIntro;