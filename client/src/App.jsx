import NavBar from "../components/NavBar/NavBar.jsx";
import HomePage from "../components/HomePage/HomePage.jsx"
import About from "../components/About/About.jsx";
import Register from "../components/Auth/Register/Register.jsx";

import { Route, Routes } from "react-router";
import { useState } from "react";
import { AuthContext } from "../contexts/auth-context.js";


function App() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState({})

  const setAuthUser = (userData) => {
    setUser(userData);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AuthContext.Provider value={{ user, setAuthUser }}>
        <NavBar handleOpen={handleOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register open={open} handleClose={handleClose} />} />

        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
