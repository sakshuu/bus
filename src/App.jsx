import React from "react";
import "./assets/css/index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import E_Reservation from "./pages/E_Reservation";
import Navigationbar from "./components/Navigationbar";
import HomePage from "./pages/auth/HomePage";
// import Mycard from "./components/Mycard";
// import Footer from "./components/Footer";
// import ChangePassword from "./pages/auth/ChangePassword";
// import MainImg from "./components/MainImg";
// import BusSchedule from "./components/BusSchedule";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Router> */}
          {/* <Route path="./homepage" element={<HomePage/>}  /> */}
        {/* </Router> */}
        {/* <Mycard/> */}
        {/* <Footer/> */}
        {/* <E_Reservation/> */}
      {/* </BrowserRouter> */}
       <BrowserRouter>
        <Navigationbar />
            <Routes>
              <Route path='/homepage' element={<HomePage />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
          </BrowserRouter>
    </>
  );
};

export default App;
