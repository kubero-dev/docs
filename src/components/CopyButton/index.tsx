import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';

const script = 'curl -L https://get.kubero.dev | bash';

export default function ScreenshotsGallery(): JSX.Element {
    const myRef = useRef(null);

    useEffect(() => {
      myRef.current.addEventListener('click', handleClick);
      return () => {};
    }, []);
  
    const handleClick = (event) => {
      navigator.clipboard.writeText(script);
      myRef.current.innerText = 'Copied to clipboard!';
    };
    return (
        <button ref={myRef} className={styles.copyButton + ' invisible md:visible'}>
            {script}
            <span className={styles.icon}><i className="ri-file-copy-line"></i></span>
        </button>
    );
  }