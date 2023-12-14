import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import AkunPage from "./pages/Account/Index";
import PilihArmada from "./pages/PilihArmada/Index";
import ArmadaStation from "./pages/ArmadaStation/Index";
import PlaceSearch from "./pages/Tempat/PlaceSearch";
import StationPage from "./pages/Station/Index";

function App() {
  return (
    <>
      <div className="main-display max-w-md mx-auto mb-[100px]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedules" element={<PilihArmada />} />
            <Route path="/armada/" element={<PilihArmada />} />
            <Route path="/armada/:category" element={<ArmadaStation />} />
            <Route
              path="/armada/:category/:stationvalue"
              element={<ArmadaStation />}
            />
            <Route path="/search-place" element={<PlaceSearch />} />
            <Route path="/search-place/:placeName" element={<PlaceSearch />} />
            <Route path="/account" element={<AkunPage />} />
            <Route path="/:type/:stationName" element={<StationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
