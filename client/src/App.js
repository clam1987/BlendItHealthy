import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import homeBanner from "./assets/HomeBanner.json";


function App() {
  const Home = homeBanner.map(info => {
   return <Banner key={info.id} message={info.message} image={require("./assets/images/" + info.image)} name={info.name} />
  })
  return (
    <div className="App">
      <Navbar />
      {Home}
      <header className="App-header">
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
      </header>
      <Footer />
    </div>
  );
}

export default App;
