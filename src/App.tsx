import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Main = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return <button ref={buttonRef}>버튼을 눌러 설문 조사를 시작해주세요.</button>;
};

const Form = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      {index === 0 && <FirstPage />}
      {index === 1 && <SecondPage />}
      <button onClick={() => setIndex(index + 1)}>다음으로</button>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;

const FirstPage = () => {
  return (
    <>
      <label htmlFor="name">이름</label>
      <input id="name" placeholder="이름을 입력해주세요" />
    </>
  );
};

const SecondPage = () => {
  return (
    <>
      <label htmlFor="gender">성별</label>
      <input id="gender" type="radio">
        남자
      </input>
      <input type="radio">여자</input>
    </>
  );
};
