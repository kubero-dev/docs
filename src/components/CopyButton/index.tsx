import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { RiFileCopyFill } from '@remixicon/react'

const script = 'curl -L https://get.kubero.dev | bash';

export default function ScreenshotsGallery(): JSX.Element {
    const myRef = useRef(null);

    useEffect(() => {
      myRef.current.addEventListener('click', handleClick);
      return () => {};
    }, []);
  
    const handleClick = (event) => {
      navigator.clipboard.writeText(script);
      event.target.innerText = 'Copied to clipboard!';
    };
    return (
        <button ref={myRef} className={styles.copyButton}>
            {script}
            <span className="icon"><i className="ri-file-copy-line"></i></span>
            
            <span className={styles.icon}>
                <RiFileCopyFill
                    size={20} // set custom `width` and `height`
                    color="grey" // set `fill` color
                    className="my-icon" // add custom class name
                />
            </span>
        </button>
    );
  }