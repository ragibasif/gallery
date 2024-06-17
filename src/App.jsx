import "./App.css";
import ImageGallery from "./components/ImageGallery";
// import ExperimentalGallery from "./components/ExperimentalGallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <h1>Photo Journal</h1>
      <ImageGallery />
      {/* <ExperimentalGallery /> */}
      <Footer />
    </>
  );
}

export default App;
