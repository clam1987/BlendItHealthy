import React from 'react';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mainContainer">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;



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
</header>  */}