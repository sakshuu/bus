import React, { useState } from 'react'
import Booking from '../pages/Booking'
import { bottle, chairs, plug, seat, wifi } from '../assets/img'
import "../assets/css/busSchedule.css";

const CardTickets = () => {
  const [showBookingCard, setShowBookingCard] = useState(false);

  const toggleBookingCard = () => {
    setShowBookingCard(!showBookingCard);
  };
   

  return <>
       <h5 className="mb-3 mt-2">
                                        Search Result: showing 9 bues from pune to Mumbai
                                      </h5>
                                      <nav class="navbar navbar-expand-lg sub-filter-nav bg-light mb-3 ">
                                        <div class="container main-nav-filters">
                                          <p className="sort-nav" href="#">
                                            SHORT BY :
                                          </p>
                                          <button
                                            class="navbar-toggler navbar-toggler-main btn-sm"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarNavAltMarkup"
                                          >
                                            <span class="navbar-toggler-icon"></span>
                                          </button>
                                          <div
                                            class="collapse navbar-collapse navbar-filters "
                                            id="navbarNavAltMarkup"
                                          >
                                            <div class="navbar-nav ">
                                          
       <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item mx-4">
                <a class="nav-link active" aria-current="page" href="#">
                Price          <i class="bi bi-sort-up mx-1 icon-filter"></i>
                </a>

              </li>
              <li class="nav-item mx-4">
                <a class="nav-link active" aria-current="page" href="#">
                Seats                <i class="bi bi-sort-up mx-1 icon-filter"></i>
                </a>

              </li>
              <li class="nav-item mx-4">
                <a class="nav-link active" aria-current="page" href="#">
                Ratings              <i class="bi bi-sort-up mx-1 icon-filter"></i>
                </a>

              </li>
              <li class="nav-item mx-4">
                <a class="nav-link active" aria-current="page" href="#">
                Duration               <i class="bi bi-sort-up mx-1 icon-filter"></i>
                </a>

              </li>
              <li class="nav-item mx-4">
                <a class="nav-link active" aria-current="page" href="#">
                Type              <i class="bi bi-sort-up mx-1 icon-filter"></i>
                </a>

              </li>
            
            </ul>
                                              {/* </div> */}
                                            </div>
                                          </div>
                                        </div>
                                      </nav>
                                      <div className="booking-card">
                                        <div className="row mt-4">
                                          <div className="col-md-6 col-sm-12">
                                            <h5 className="stars" >ORDINARY EXPRESS</h5>
                                            <p className="fonts mt-3" >
                                              <i class="bi bi-star-fill" ></i> 2.5 (+200 Ratings)
                                            </p>
                                            <p>
                                              <i class="bi bi-bus-front"></i> Live Tracking
                                            </p>
                          
                                            <div className="card-start-content">
                                              <img src={chairs} alt="seats" width={26} />
                                              <p className="m-0 me-1">28 Seats </p>
                                              <span>|</span>
                                              <p className="m-0 me-1">Amenities: </p>
                                              <img
                                                src={bottle}
                                                alt="bottle"
                                                width={17}
                                                className="me-1"
                                              />
                                              <img src={wifi} alt="wifi" width={17} className="me-1" />
                                              <img src={plug} alt="plug" width={17} className="me-2" />
                                              <p className="m-0 fonts">
                                                <i className="bi bi-plus-circle"></i> 2
                                              </p>
                                            </div>
                                          </div>
                          
                                          <div className="col-md-3 d-flex col-sm-6 mobile-col">
                                            <div className="line-steper">
                                              <div className="line"></div>
                          
                                              <div className="steper-sub">
                                                <i class="bi bi-record-circle-fill"></i>
                                              </div>
                                              <div className="steper-mid">
                                                <i class="bi bi-arrow-down-circle-fill"></i>
                                              </div>
                                              <div className="steper-end">
                                                <i class="bi bi-record-circle-fill"></i>
                                              </div>
                                            </div>
                                            <div>
                                              <h6>1200 PM</h6>
                                              <h6 className="fonts">Pune</h6>
                                              <p className="fonts">03:30 Hours</p>
                                              <h6 className="fonts">Mumbai</h6>
                                              <h6>10:30 PM</h6>
                                            </div>
                                          </div>
                                          <div className="col-md-3 col-sm-6 mobile-col col-last">
                                            <div>
                                              <p className="text-center stars">fare Cost</p>
                                              <h6 className="text-center">₹ 180.00</h6>
                                              <div className="end-card">

                                                    <button
                                                  type="button"
                                                  class="btn btn-danger btn-sm btn-booking mb-2"   onClick={toggleBookingCard}>
                                                  BOOK NOW
                                                </button>
{/* cancel btn */}
                                                {/* <button
                                                  type="button"
                                                  class="btn btn-outline-danger btn-sm btn-booking mb-2">
                                                  cancel
                                                </button> */}
                                                  

                                                {/* <Booking /> */}

                                              </div>
                                              <p className="t-color text-center">View Step</p>
                                            </div>
                                          </div>
                                        </div>
                                                {showBookingCard && <Booking />}
                                      </div>
  </>
}

export default CardTickets