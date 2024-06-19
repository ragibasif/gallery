import "./App.css";
// import ExperimentalGallery from "./components/ExperimentalGallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ImagePreloader from "./components/ImagePreloader";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <h1>Photo Journal</h1>
      {/* <ImageGallery /> */}
      {/* <ExperimentalGallery /> */}
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
