import React from 'react';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import Ingredients from "./pages/Ingredients/Ingredients";
import Resources from "./pages/Resources/Resources"
import Programs from "./pages/Programs/Programs"
import Testimonials from "../src/pages/Testimonials/Testimonials"
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
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/resources" component={Resources} />
          <Route path="/programs" component={Programs} />
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
        <Footer />
        </div>
      </div>
    </Router>
  );
}


export default App;