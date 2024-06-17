import "./App.css";
import ImageGallery from "./components/ImageGallery";
import ExperimentalGallery from "./components/ExperimentalGallery";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <h1>Photo Journal</h1>
      {/* <ExperimentalGallery/> */}
      <ImageGallery />
      <Footer />
    </>
  );
}

export default App;
