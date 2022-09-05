import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import Detail from "./Components/Detail";
import DataStore from "./hooks/useFishStore";

function App() {
  const domain = "http://localhost:3001/data";

  const [contents, setContents] = useState([]);

  const getContents = () => {
    fetch(domain)
      .then((res) => res.json())
      .then((data) => {
        setContents(data);
      })
      .catch((e) => {
        console.log(`에러 캐치 ${e}`);
      });
  };

  useEffect(() => {
    getContents();
  }, []);
  return (
    <div className="App">
      <h2>app컴포넌트</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main contents={contents} />}></Route>
          <Route
            path="/question/:id"
            element={<Detail contents={contents} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
