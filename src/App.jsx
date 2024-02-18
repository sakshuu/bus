import React from "react";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
// import E_Reservation from "./pages/E_Reservation";
import Navigationbar from "./components/Navigationbar";
// import ChangePassword from "./pages/auth/ChangePassword";
// import MainImg from "./components/MainImg";
// import BusSchedule from "./components/BusSchedule";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        {/* <E_Reservation/> */}
      </BrowserRouter>
    </>
  );
};

export default App;
