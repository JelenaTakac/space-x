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

function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
          <Navbar />
          <Routes>
            <Route path="/launches" element={<LaunchesView />} />
            <Route path="/launches/:launchId" element={<LaunchView />} />
            <Route path="/rockets" element={<RocketsView />} />
            <Route path="/ships" element={<ShipsView />} />
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<ErrorPageView />} />
          </Routes>
        </LaunchesContextProvider>
      </Router>
    </div>
  );
}

export default App;
