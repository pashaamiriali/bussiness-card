import "./App.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-card">
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
