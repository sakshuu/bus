import React from 'react'
import Seats from '../components/Seats'
import PassengerInfo from '../components/PassengerInfo'
import "./../assets/css/bookings.css"

const Booking = () => {




  return <>
  <div className="card  p-2 m-2" >
    <div className="row mt-3">
        <div className="col-md-3 col-sm-6 ">
<Seats/>
        </div>
        <div className="col-md-9 col-sm-6">
          <div className='card-passenger'>
          <i class="bi bi-record-circle-fill"></i>
          <div className='lines-card'></div>
          <i class="bi bi-record-circle-fill"></i>
          <i class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div className='card-lines'>
          <h6>Pune</h6>
<span className=' t-bold'>07:30 pm</span>
<span className='fonts'>03:30 hours</span>
<span className='t-bold'>07:30 am</span>
          <h6>Mumbai</h6>
          </div>
<PassengerInfo/>
          </div>
          </div>
        </div>
  </>
}

export default Booking