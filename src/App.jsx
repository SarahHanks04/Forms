import "./App.css";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./Multiple Forms/Features/FirstPage";
import SecondPage from "./Multiple Forms/Features/Secondpage";
import ThirdPage from "./Multiple Forms/Features/ThirdPage";
import SubmitPage from "./Multiple Forms/Features/SubmitPage";
import Layout from "./Multiple Forms/Features/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Route>
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </>
  );
}

export default App;
