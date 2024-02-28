import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  HomeView,
  LaunchesView,
  RocketsView,
  ShipsView,
  ErrorPageView,
} from "./components/views";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/launches" element={<LaunchesView />} />
          <Route path="/rockets" element={<RocketsView />} />
          <Route path="/ships" element={<ShipsView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<ErrorPageView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
