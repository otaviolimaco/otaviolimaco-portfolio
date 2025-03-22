import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import TalkToMe from "./pages/TalkToMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/talktome" element={<TalkToMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
        </Routes>
      </Router>
      
      <Footer />
    </>
  )
}

export default App;