import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/screenshots/app.png",
    original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 1528,
    height: 2876,
    tags: [
      { value: "UI", title: "UI" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/assets/screenshots/pipeline.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 1300,
    height: 1788,
    caption: "Kubero Pipeline view",
  },
  {
    src: "/assets/screenshots/appoverview.png",
    original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 1409,
    height: 931,
    caption: "App overqview with lanes",
  },
  {
    src: "/assets/screenshots/login.png",
    original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    width: 861,
    height: 549,
    caption: "SSO Login Page",
  },
  {
    src: "/assets/screenshots/logs.png",
    original: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    width: 2688,
    height: 1572,
    caption: "Web Console Logs",
  },
  {
    src: "/assets/screenshots/addons.png",
    original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    width: 1084,
    height: 1485,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: "/assets/screenshots/pipelinelist.png",
    original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    width: 2952,
    height: 1456,
    caption: "286H (gratisography.com)",
  },
  {
    src: "/assets/screenshots/addon_create.png",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 1219,
    height: 1140,
    tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: "/assets/screenshots/cli.png",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 694,
    height: 441,
    caption: "201H (gratisography.com)",
  },
];