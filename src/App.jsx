import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Image from "./components/Image";
import ImageSlider from "./components/ImageSlider";

const images = [
  "/src/assets/images/IMG_0687.jpg",
  "/src/assets/images/IMG_0630.jpg",
  "/src/assets/images/IMG_0302.jpg",
  "/src/assets/images/IMG_0629.jpg",
  "/src/assets/images/IMG_0695.jpg",
  "/src/assets/images/IMG_0683.jpg",
  "/src/assets/images/IMG_0698.jpg",
  "/src/assets/images/IMG_0461.jpg",
  "/src/assets/images/IMG_0301.jpg",
  "/src/assets/images/IMG_0699.jpg",
  "/src/assets/images/IMG_0303.jpg",
  "/src/assets/images/IMG_0277.jpg",
  "/src/assets/images/IMG_0627.jpg",
];

function App() {
  return (
    <>
      {images.map((e, idx) => (
        <Image image={e} key={idx} index={idx} />
      ))}
      <ImageSlider />
      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
}
export default App;
