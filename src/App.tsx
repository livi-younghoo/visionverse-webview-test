import { useEffect, useRef } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useSearchParams,
} from "react-router-dom";

const Main = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (buttonRef.current && searchParams.get("isWebviewAccess")) {
      buttonRef.current.focus();
    }
  }, [searchParams]);

  return (
    <>
      {Array.from(
        {
          length: 20,
        },
        (_, idx) => {
          return (
            <button key={idx}>{idx} 포커스가 가도 읽히면 안되는 요소</button>
          );
        }
      )}
      <button ref={buttonRef}>의도적으로 포커스 발생시킨 요소</button>
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
