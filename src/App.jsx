import React from "react";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
// import E_Reservation from "./pages/E_Reservation";
// import Navigationbar from "./components/Navigationbar";
import Mycard from "./components/Mycard";
import Footer from "./components/Footer";
// import ChangePassword from "./pages/auth/ChangePassword";
// import MainImg from "./components/MainImg";
// import BusSchedule from "./components/BusSchedule";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navigationbar /> */}
        <Mycard/>
        <Footer/>
        {/* <E_Reservation/> */}
      </BrowserRouter>
    </>
  );
};

export default App;
