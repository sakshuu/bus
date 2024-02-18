import React from 'react'
import "./../assets/css/bookings.css"

const PassengerInformation = () => {
  return <>
      {/* <div class="p-2"> */}
      <h6>Passenger Information</h6>
      <div className="card p-2">
        <div className='d-flex justify-content-between'>
        <p className='fonts'>passenger 1</p>
        <p style={{fontWeight:'500'}}>Seat No. 1</p>
        </div>






              <div>
                <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Name</label>
                <input
                  type="text"
                  class="form-control p-0 fonts p-1"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className='partonepassengerinfo'>

              <div>
                <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Gender</label>
                <div className="d-flex gap-2">


                <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label fonts" style={{fontWeight:'500'}} for="flexRadioDefault1">
    Male
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label fonts" style={{fontWeight:'500'}} for="flexRadioDefault2">
    Female
  </label>
</div>

</div>
              </div>

              <div >      
              <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>concession</label>

              <div class="dropdown">
                <button type='button' class="dropdown-toggle btn btn-light fonts"  id="dropdownMenuButton1" data-bs-toggle="dropdown" style={{cursor:'pointer',  width:'150px'}}>
                --select--
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              </div>

<div>
  <div>

                <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Age</label>
                </div>
                <input
                style={{width:"60px", textAlign:'center'}}
                  type="text"
                  class=" p-0 fonts "
                  id="name"
                  placeholder="age"/>
                  </div>

              <div className='childs' >      
              <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>child</label>

              <div class="dropdown">
                <button type='button' class="dropdown-toggle btn btn-light fonts"  id="dropdownMenuButton1" data-bs-toggle="dropdown" style={{cursor:'pointer'}}>
                --select--
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              </div>

              </div>

              <div className="partsecondpassengerinfo" >
              <div  className='concession-part'>      
              <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>concession</label>

              <div class="dropdown">
                <button type='button' class="dropdown-toggle btn btn-light fonts"  id="dropdownMenuButton1" data-bs-toggle="dropdown" style={{cursor:'pointer', width:'150px'}}>
                --select--
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              </div>
<div>
  <label for="name" class="form-label fonts" style={{fontWeight:'500'}}>Update concession Proof</label>
  <div className='main-inp-btn-group'>
<input type="serach" className='search-inp'/>
<div className='inp-btn'>
  <div class="  btn-update">update</div>
</div>
  </div>
</div>

              </div>






      </div>
    {/* </div> */}
  </>
}

export default PassengerInformation