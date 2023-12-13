import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import TempatPage from "./pages/Tempat/Index";
import AkunPage from "./pages/Account/Index";
import PilihArmada from "./pages/PilihArmada/Index";
import ArmadaStation from "./pages/ArmadaStation/Index";

function App() {
  return (
    <>
      <div className="main-display max-w-md mx-auto mb-[450px]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedules" element={<PilihArmada />} />
            <Route path="/places" element={<TempatPage />} />
            <Route path="/account" element={<AkunPage />} />
            <Route path="/pilih-armada" element={<PilihArmada />} />
            <Route path="/:category" element={<ArmadaStation />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
