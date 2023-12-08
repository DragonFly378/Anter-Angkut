import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import JadwalPage from "./pages/Jadwal/Index";
import TempatPage from "./pages/Tempat/Index";
import AkunPage from "./pages/Account/Index";

function App() {
  return (
    <>
      <div className="main-display max-w-md mx-auto h-[1200px]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedules" element={<JadwalPage />} />
            <Route path="/places" element={<TempatPage />} />
            <Route path="/account" element={<AkunPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
