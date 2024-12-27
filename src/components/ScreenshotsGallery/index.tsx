import { Gallery as GridGallery } from "react-grid-gallery";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { images, CustomImage } from "./images";


const slides = images.map(({ original, width, height }) => ({
    src: original,
    width: width * 4,
    height: height * 4,
  }));

export default function ScreenshotsGallery(): JSX.Element {

    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    return (
          <div>
            <GridGallery 
                images={images} 
                onClick={handleClick}
                enableImageSelection={false}/>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
          </div>
    );
  }
  