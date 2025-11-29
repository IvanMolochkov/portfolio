import "./styles/main.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectView from "./pages/projectView";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <ScrollToTop/>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/project" element={<ProjectView/>}></Route>
          <Route path="/project/:id" element={<ProjectView/>}/>
        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
