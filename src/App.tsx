import { useEffect, useRef } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <button>1234</button>
      {Array.from(
        {
          length: 20,
        },
        (_, idx) => {
          return (
            <input placeholder="포커스가 가도 읽히면 안되는 요소" key={idx} />
          );
        }
      )}
      <input ref={inputRef} />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
