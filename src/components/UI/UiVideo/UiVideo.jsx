import styles from './UiVideo.module.css';
import propTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useRef } from 'react';

const UiVideo = ({
    src,
    playbackRate=1.0,
    classes,
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, [])
    return (
        <video 
            autoPlay 
            muted 
            loop 
            playbackRate={playbackRate} 
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    )
}

UiVideo.propTypes = {
    src: propTypes.string,
    playbackRate: propTypes.number,
    classes: propTypes.string,
}

export default UiVideo;