import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <NavbarComponent />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  
    </Router>
  );
}

export default App;
