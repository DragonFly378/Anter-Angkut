import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import AkunPage from "./pages/Account/Index";
import PilihArmada from "./pages/Schedules/Index";
import ArmadaStation from "./pages/Station/StationSearch";
import PlaceSearch from "./pages/Place/PlaceSearch";
import StationPage from "./pages/Station/Index";
import PlacePage from "./pages/Place/Index";

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
            <Route path="/:type/:stationName" element={<StationPage />} />{" "}
            <Route path="/tempat/:id" element={<PlacePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
