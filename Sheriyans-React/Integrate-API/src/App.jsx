import Show from "./components/Show";
import Home from "./components/Home";
import About from "./components/About";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full">
      <nav className="w-full p-4">
        <ul className="flex justify-center gap-8">
          <li className="text-lg font-medium">
            <Link to="/" className="text-gray-700">
              Home
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link to="/about" className="text-gray-700">
              About
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link to="/show" className="text-gray-700">
              Show
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
