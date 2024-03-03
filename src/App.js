import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomeView,
  LaunchesView,
  RocketsView,
  ShipsView,
  ErrorPageView,
} from "./components/views";
import { Navbar } from "./components/navbar";
import LaunchesContextProvider from "./context/LaunchesContext";
import LaunchView from "./components/views/LaunchView";
import ShipsContextProvider from "./context/ShipsContext";
import ShipView from "./components/views/ShipView";
import RocketsContextProvider from "./context/RocketsContext";
import RocketView from "./components/views/RocketView";

function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
          <ShipsContextProvider>
            <RocketsContextProvider>
              <Navbar />
              <Routes>
                <Route path="/launches" element={<LaunchesView />} />
                <Route path="/launches/:launchId" element={<LaunchView />} />
                <Route path="/rockets" element={<RocketsView />} />
                <Route path="/rockets/:rocketId" element={<RocketView />} />
                <Route path="/ships" element={<ShipsView />} />
                <Route path="/ships/:shipId" element={<ShipView />} />
                <Route path="/" element={<HomeView />} />
                <Route path="*" element={<ErrorPageView />} />
              </Routes>
            </RocketsContextProvider>
          </ShipsContextProvider>
        </LaunchesContextProvider>
      </Router>
    </div>
  );
}

export default App;
