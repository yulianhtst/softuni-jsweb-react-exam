import NavBar from "../components/NavBar/NavBar.jsx";
import HomePage from "../components/HomePage/HomePage.jsx"
import { Route, Routes } from "react-router";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </>
  );
}

export default App;
