import NavBar from "../components/NavBar/NavBar.jsx";
import HomePage from "../components/HomePage/HomePage.jsx"
import About from "../components/About/About.jsx";

import { Route, Routes } from "react-router";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
