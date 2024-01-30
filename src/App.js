import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import {
  HOME_PATH,
  SEARCH_PATH,
  WATCHED_PATH,
  ABOUT_US_PATH,
} from "./constants/pathNames";

import Description from "./components/Description/Description";
import SearchBar from "./components/SearchBar/SearchBar";
import WatchedBar from "./components/WatchedBar/WatchedBar";
import About from "./components/About";

function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />

      <Routes>
        <Route path={HOME_PATH} element={<Description />} />
        <Route path={SEARCH_PATH} element={<SearchBar />} />
        <Route path={WATCHED_PATH} element={<WatchedBar />} />
        <Route path={ABOUT_US_PATH} element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
