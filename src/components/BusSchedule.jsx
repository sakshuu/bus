import React, { useState } from "react";
import "../assets/css/busSchedule.css";
import { bottle, plug, seat, wifi } from "../assets/img";
import Booking from "../pages/Booking";
import CardTickets from "./CardTickets";



const BusSchedule = () => {
  // const [booking, setBooking] = useState(false)
  
  
  return (
    <>
      <div className="container booking-container">
        <div className="row" style={{marginBottom:'100px'}}>
          <div className="col-md-3 col-sm-12">
            <div className="filter">
              <div>Filter</div>
              <div className="t-color fonts">Clear All</div>
            </div>

            <div className="sub-filter">
              <h6>Bus service Type</h6>
              {/* <div class="dropdown custom-input-group ">
                <input
                  class=" custom-input-group w-100 dropdown-toggle dropdown-main"
                  type="text"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  placeholder="--any--"
                />
                <i class="bi bi-caret-down-fill"></i>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item mx-4" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item mx-4" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item mx-4" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <div class="dropdown">
                <div class="dropdown-toggle drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                  Dropdown button
                </div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div> */}
              {/* <div class="dropdown">
  <input class="dropdown-toggle drop"  id="dropdownMenuButton1" data-bs-toggle="dropdown" placeholder="--any--" />
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
{/* <div class="dropdown">
  <input class="dropdown-toggle drop" type="input" id="dropdownMenuButton1" data-bs-toggle="dropdown" value="Dropdown button"/>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
{/* <div class="dropdown">
  <input class="dropdown-toggle drop"  id="dropdownMenuButton1" data-bs-toggle="dropdown" value="--any--"/>   <i class="bi bi-caret-down-fill"></i>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
            <div class="dropdown">
  <div class="dropdown-toggle drop" id="dropdownMenuButton1" data-bs-toggle="dropdown" value="--any--">
    <input class="dropdown-toggle" readonly value="--any--" />
    {/* <i class="bi bi-caret-down-fill"></i> */}
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            </div>

            <div className="sub-next">
              <h6>Bus service Type</h6>

              <div class="dropdown">
  <div class="dropdown-toggle drop" id="dropdownMenuButton1" data-bs-toggle="dropdown" value="--any--">
    <input class="dropdown-toggle" readonly value="--any--" />
    {/* <i class="bi bi-caret-down-fill"></i> */}
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

              <h6 className="mt-4">Bus service Type</h6>
              <div class="dropdown">
  <div class="dropdown-toggle drop" id="dropdownMenuButton1" data-bs-toggle="dropdown" value="--any--">
    <input class="dropdown-toggle" readonly value="--any--" />
    {/* <i class="bi bi-caret-down-fill"></i> */}
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

              <h6 className="mt-4 mb-3">Boarding Time</h6>
              <div className="slot-main">
                <div className="slot">07 00 AM - 12 00PM</div>
                <div className="slot">07 00 AM - 12 00PM</div>
              </div>
              <div className="slot-main mt-2">
                <div className="slot">07 00 AM - 12 00PM</div>
                <div className="slot">07 00 AM - 12 00PM</div>
              </div>
              <h6 className="mt-3 mb-3">Boarding Time</h6>
              <div className="slot-main">
                <div className="slot">07 00 AM - 12 00PM</div>
                <div className="slot">07 00 AM - 12 00PM</div>
              </div>
              <div className="slot-main mt-2">
                <div className="slot">07 00 AM - 12 00PM</div>
                <div className="slot">07 00 AM - 12 00PM</div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
          

                                   <CardTickets />


          </div>
        </div>
      </div>
    </>
  );
};

export default BusSchedule;
