import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Mainpage from './components/Homepage/Mainpage';
import Adminpage from './components/Adminpage/Adminpage';
import Login from "./components/Adminpage/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route
        path='admin'
        element={loggedIn ? <Adminpage /> : <Login setLoggedIn={setLoggedIn} />}
      />
    </Routes>
  );
}

export default App;