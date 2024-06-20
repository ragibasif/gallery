import React from 'react';

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <h1>Photo Journal</h1>
      <Gallery />
      <Footer />
    </>
  );
}
export default App;
