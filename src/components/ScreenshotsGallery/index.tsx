import { Gallery as GridGallery } from "react-grid-gallery";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { images, CustomImage } from "./images";
import styles from "yet-another-react-lightbox/styles.css";
import stylesPlus from './styles.module.css';


const slides = images.map(({ src, width, height }) => ({
    src: src,
    width: width * 4,
    height: height * 4,
  }));

export default function ScreenshotsGallery(): JSX.Element {

    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    return (
          <div className={stylesPlus.screenshotsGallery}>
            <GridGallery 
                images={images}
                rowHeight={400}
                margin={10}
                onClick={handleClick}
                enableImageSelection={false}
                />

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
          </div>
    );
  }
  