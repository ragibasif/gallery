import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Gallery from "./components/Gallery";
import ImageTrail from "./ImageTrail";
import ImageSlider from "./components/ImageSlider";

const images = [
  "/src/assets/images/IMG_0686.jpg",
  "/src/assets/images/IMG_0684.jpg",
  "/src/assets/images/IMG_0687.jpg",
  "/src/assets/images/IMG_0689.jpg",
  "/src/assets/images/IMG_0706.jpg",
  "/src/assets/images/IMG_0702.jpg",
  "/src/assets/images/IMG_0630.jpg",
  "/src/assets/images/IMG_0302.jpg",
  "/src/assets/images/IMG_0629.jpg",
  "/src/assets/images/IMG_0628.jpg",
  "/src/assets/images/IMG_0685.jpg",
  "/src/assets/images/IMG_0695.jpg",
  "/src/assets/images/IMG_0683.jpg",
  "/src/assets/images/IMG_0698.jpg",
  "/src/assets/images/IMG_0461.jpg",
  "/src/assets/images/IMG_0301.jpg",
  "/src/assets/images/IMG_0699.jpg",
  "/src/assets/images/IMG_0690.jpg",
  "/src/assets/images/IMG_0303.jpg",
  "/src/assets/images/IMG_0688.jpg",
  "/src/assets/images/IMG_0633.jpg",
  "/src/assets/images/IMG_0300.jpg",
  "/src/assets/images/IMG_0277.jpg",
  "/src/assets/images/IMG_0627.jpg",
  "/src/assets/images/IMG_0299.jpg",
  "/src/assets/images/IMG_0691.jpg",
];

function App() {
  return (
    <>
      {images.map((e, idx) => (
        <Gallery image={e} key={idx} index={idx} />
      ))}
      <ImageSlider />
      {/* <ImageTrail images={images} /> */}
      {/* <Header /> */}
      {/* <h1>Photo Journal</h1> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </>
  );
}
export default App;
