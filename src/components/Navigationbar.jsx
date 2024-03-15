import React from "react";
import { msrtc_icon } from "../assets/img";
import "./../assets/css/mynavbar.css";
import SignIn from "../pages/auth/SignIn";
import GenerateOtp from "../pages/auth/GenerateOtp";
import Signup from "../pages/auth/Signup";
import ResetPassword from "../pages/auth/ResetPassword";
import ChangePassword from "../pages/auth/ChangePassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import MainImg from "../components/MainImg";
import { useState } from "react";

const Navigationbar = () => {
  const [showbusComponent, setShowbusComponent] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-danger navbar-dark main-navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={msrtc_icon} width={30} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Tours
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Login
                </a>              
              </li>

              <div class="dropdown">
  <a class="dropdown-toggle nav-link active" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    My Bookings
  </a>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-my-books" style={{width:'4px'}} aria-labelledby="dropdownMenuButton1">
    <li className="item-drop"><a class="dropdown-item drop-text" href="#">Action</a></li>
    <hr className="dropdown-divider" />
    
    <li className="item-drop"><a class="dropdown-item drop-text" href="#">Another action</a></li>
  </ul>
</div>

              <li class="nav-item dropdown">

                {/* <div className="d-flex"> */}
                  <a
                    class="nav-link profile-icon  active dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {/* <div className="person-fill"> */}
                    <i class="bi bi-person-fill"></i>
                    {/* </div> */}
                  </a>
                    {/* </div> */}
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item drop-text" href="/profile">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item drop-text"
                        href="#"
                        data-bs-target="#passwordModal"
                        data-bs-toggle="modal"
                      >
                        Change Password
                      </a>
                    </li>
                    <li>
                      {/* <hr class="dropdown-divider" /> */}
                    </li>
                    <li>
                      <a class="dropdown-item drop-text"
                      //  onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* {showbusComponent ? ( */}
        <MainImg />
      {/* ) : ( */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5 sm-8">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <SignIn 
                // setShowbusComponent={setShowbusComponent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* )} */}
      <div
        class="modal fade"
        id="ModelSignUp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <Signup />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      </div>
      <div class="modal-body">
      </div>

    </div>
  </div> */}
      </div>

      <div
        class="modal fade"
        id="generateOtpModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <GenerateOtp />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="verifyOtpModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <VerifyOtp />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="resetPasswordModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <ResetPassword />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="passwordModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="row">
              <div className="col-md-5">
                <div className="background-adds"></div>
              </div>
              <div className="col-md-7 sm-12">
                <ChangePassword />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainImg /> */}
    </>
  );
};

export default Navigationbar;
