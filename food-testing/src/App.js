import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
