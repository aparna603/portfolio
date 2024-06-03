import "./App.css";
import NavbarComp from "./components/Navbar";
import About from "./components/About";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Card>
      <div className="App">
        <main className="main">
          <NavbarComp />
          <About />
          <Skills />

          <Contact />
        </main>
      </div>
    </Card>
  );
}

export default App;
