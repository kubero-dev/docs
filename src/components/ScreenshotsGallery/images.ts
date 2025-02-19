import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/screenshots/app-overview.png",
    original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 1185,
    height: 1170,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Aplication view",
  },
  {
    src: "/assets/screenshots/pipeline-overview.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 1179,
    height: 1181,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Kubero Pipeline overview",
  },
  {
    src: "/assets/screenshots/pipeline-new.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 1179,
    height: 1181,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Kubero Pipeline view",
  },
  {
    src: "/assets/screenshots/app-metrics.png",
    original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 1361,
    height: 1821,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Application metrics",
  },
  {
    src: "/assets/screenshots/login.png",
    original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    width: 861,
    height: 549,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "SSO Login Page",
  },
  {
    src: "/assets/screenshots/app-logs.png",
    original: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    width: 1181,
    height: 1187,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Web Console Logs",
  },
  {
    src: "/assets/screenshots/app-vulnerabilities.png",
    original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    width: 1184,
    height: 1185,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Application vulnerabilities",
  },
  {
    src: "/assets/screenshots/pipeline-list.png",
    original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    width: 1179,
    height: 1179,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "286H (gratisography.com)",
  },
  {
    src: "/assets/screenshots/app-new-addon.png",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 1182,
    height: 1183,
    tags: [
      { value: "ui", title: "UI" },
    ],
    caption: "Create a new applicatioin addon",
  },
  {
    src: "/assets/screenshots/cli.png",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 753,
    height: 639,
    tags: [
      { value: "cli", title: "CLI" },
    ],
    caption: "Kubero CLI",
  },
];