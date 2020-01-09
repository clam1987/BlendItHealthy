import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import homeBanner from "./assets/HomeBanner.json";
import Image from "./components/Image/Image"
import homeGallery from "./assets/homeGallery.json";
import Wrapper from "./components/Wrapper/Wrapper";
import ExtraImages from "./components/ExtraImages/ExtraImages";
import HomePage from "./assets/HomePage.json"






function App() {
  const BottomImage = HomePage.map(botimg => {
    return <ExtraImages key={botimg.id} banners={require("./assets/images/" + botimg.image)}/>
  })

  const Home = homeBanner.map(info => {
    return <Banner key={info.id} h1={info.h1} message={info.message} image={require("./assets/images/" + info.image)} name={info.name} />
  })
  
  const Gallery = homeGallery.map(image => {
    return  <Image key={image.id} name={image.name} gallery={require("./assets/images/" + image.gallery)} />
  })
  return (
    <div className="App">
      <div className="container mainContainer">
      <Navbar />
      {Home}
      <Wrapper>
      {Gallery}

      </Wrapper>
      {BottomImage}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
      </div>
    </div>
  );
}

export default App;

