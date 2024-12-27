import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function ScreenshotGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="assets/screenshots/app.png">
                    <img alt="img1" src="assets/screenshots/thumbnails/app_tn.jpg" />
                </a>
                <a href="assets/screenshots/addons.png">
                    <img alt="img2" src="assets/screenshots/thumbnails/addons_tn.jpg" />
                </a>
            </LightGallery>
        </div>
    );
}
