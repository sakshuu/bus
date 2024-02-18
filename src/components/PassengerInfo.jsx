import React from 'react'
import PassengerInformation from './PassengerInformation'
import "./../assets/css/bookings.css"

const PassengerInfo = () => {
  return <>
  <div class="card p-3 m-2">

<PassengerInformation/>

    <div class="card p-2">
    <h6>Contact Deatils</h6>
    <div>
                <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Email ID</label>
                <input
                  type="text"
                  class="form-control p-0 fonts p-1"
                  id="name"
                  placeholder="Email ID"
                />
              </div>
    <div className='mt-3'>
                <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Phone</label>
                <div className="d-flex gap-4">

                <input
                  type="text"
                  class="form-control p-0 fonts p-1 w-25"
                  id="name"
                  placeholder="91"
                  />
                <input
                  type="text"
                  class="form-control p-0 fonts p-1"
                  id="name"
                  // placeholder="Email ID"
                  />
                  </div>
              </div>
    </div>
<div className='mt-3 d-flex justify-content-between'>
  <div className='d-flex gap-2' style={{flexWrap:'wrap'}}>
    <h6>Total Amount :  ₹ 78678</h6>
    {/* <h6></h6> */}
  </div>
  <button type="button" class="btn btn-danger btn-sm">Proceed to pay</button>

</div>
  </div>
  </>
}

export default PassengerInfo