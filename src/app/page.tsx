'use client'
import styles from './styles.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa';

export default function Home() {
  const [timerDone, setTimerDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <ReactPlayer
          className={styles.video}
          playsInline
          src="/assets/overlay.mp4"
          playing={true}
          width="1920px"
          height="1080px"
          muted
          loop={false}
        />
        <h1 className={timerDone ? styles.h1Active : styles.h1NoActive}>6 MONTHS!</h1>

        {
          timerDone && (
            <div className={styles.videoMainWrapper}>
              <ReactPlayer
                className={styles.videoMain}
                src="https://www.youtube.com/watch?v=pXdagO33j_w"
                playing={isPlaying}
                width="100%"
                height="auto"
                // autoPlay={isPlaying}
                controls
                loop={false}
                light="/assets/thumbnail.jpg"
                playIcon={
                  <button className={styles.customPlayButton}>
                    <FaPlay size={40} />
                  </button>
                }
                onClickPreview={() => setIsPlaying(true)}
              />
            </div>
          )
        }
        {
          timerDone && <h2>M + S</h2>
        }
      </div>
    </div>
  );
}
