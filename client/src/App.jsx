import { Navbar } from "./components";
import Home from "./routes/home/Home";
import "./scss/layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
