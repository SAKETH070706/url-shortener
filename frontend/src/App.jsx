import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Converter from "./components/Converter";
import Stats from "./components/Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/stats/:code" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;   