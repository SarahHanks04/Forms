import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./Multiple Forms/Features/FirstPage";
import SecondPage from "./Multiple Forms/Features/Secondpage";
import ThirdPage from "./Multiple Forms/Features/ThirdPage";
import SummaryPage from "./Multiple Forms/Features/SubmitPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
