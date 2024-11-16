import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import SelectPage from "./pages/selectPage";
import InputPage from "./pages/inputPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/input" element={<InputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
