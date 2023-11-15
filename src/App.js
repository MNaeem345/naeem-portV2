import React from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '../src/App.css';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="others">
      <Main />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
