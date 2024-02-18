import React from 'react'
import "./../assets/css/reservation.css"

const E_Reservation = () => {
  return <>
  <div className="card p-4 m-2 card-reservation">

  <h4 style={{textAlign:'center'}}>Maharashtra State Road Transport <br/> Corporation <br/> E-Reservation Ticket</h4>

  <span className='t-dark'>Trip Information</span>

  <table class="table mt-2 bordered-table">

    <tbody className='f-fonts'>
      <tr>
        <th>Trip Number :</th>
        <td>SLPD0019587</td>
        <td>Approx Boarding Time :</td>
        <td>17: 15 Hrs</td>
      </tr>
      <tr>
        <th>Trip Number :</th>
        <td>SLPD0019587</td>
        <td>Approx Boarding Time :</td>
        <td>17: 15 Hrs</td>
      </tr>
      <tr>
        <th>Trip Number :</th>
        <td>SLPD0019587</td>
        <td>Approx Boarding Time :</td>
        <td>17: 15 Hrs</td>
      </tr>
      <tr>
        <th>Trip Number :</th>
        <td>SLPD0019587</td>
        <td>Approx Boarding Time :</td>
        <td>17: 15 Hrs</td>
      </tr>
      <tr>
        <th>Trip Number :</th>
        <td>SLPD0019587</td>
        <td>Approx Boarding Time :</td>
        <td>17: 15 Hrs</td>
      </tr>


    </tbody>
  </table>

  <span className='t-dark'>Passengers Informations</span>
  <table class="table mt-2 bordered-table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Adult/Child</th>
        <th scope="col">Gen</th>
        <th scope="col">Seat  No</th>
        <th scope="col">Seat Status</th>
        <th scope="col">Waiting  list No</th>
        <th scope="col">Quota</th>
        <th scope="col">Conc.code</th>
        <th scope="col">Conc Proof</th>
        <th scope="col">Conc Proof Details</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td >XXXXX XXXX</td>
        <td>60</td>
        <td>A</td>
        <td>M</td>
        <td>8</td>
        <td>CONFIRMED</td>
        <td>----</td>
        <td>General</td>
        <td>No Concession</td>
        <td>NA</td>
        <td>NA</td>
        {/* <td>NA</td> */}
      </tr>
      <tr>
        <td >XXXXX XXXX</td>
        <td>60</td>
        <td>A</td>
        <td>M</td>
        <td>8</td>
        <td>CONFIRMED</td>
        <td>----</td>
        <td>General</td>
        <td>No Concession</td>
        <td>NA</td>
        <td>NA</td>
        {/* <td>NA</td> */}
      </tr>
      <tr>
        <td >XXXXX XXXX</td>
        <td>60</td>
        <td>A</td>
        <td>M</td>
        <td>8</td>
        <td>CONFIRMED</td>
        <td>----</td>
        <td>General</td>
        <td>No Concession</td>
        <td>NA</td>
        <td>NA</td>
        {/* <td>NA</td> */}
      </tr>
     
    </tbody>
  </table>

<table class="table w-50 bordered-table">
  <thead>
    <tr>
      <th scope="col">Infant Name</th>
      <th scope="col">Infant Age</th>
      <th scope="col">infant Sex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XXXXX XXXX</td>
      <td>Two</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<span className='t-dark mt-1'>Total Fare Details</span>
<table class="table bordered-table mt-2 f-fonts">
  <tbody>
    <tr>
    <td >Basic Fare :</td>
      <td style={{textAlign:'right'}}>876.00</td>
    </tr>
    <tr>
    <td>Reservation Charge :</td>
      <td style={{textAlign:'right'}}>15.00</td>
    </tr>
    <tr>
    <td >ASN Amount : </td>
      <td style={{textAlign:'right'}}>3.00</td>
    </tr>
    <tr>  
    <td>Total Chargeable Amount : <br/> Including GST</td>
      <td style={{textAlign:'right'}}>894.00 + (Convenience charges will be 0.75% of total ticket amount + GST)</td>
    </tr>

  </tbody>
</table>

<span className='t-dark mt-3'>Terms & Conditions:
</span>
<ul class="conditions">
  <li>This E-Ticket is not transferable. This E-Ticket is valid only for the details specified above. The passenger having this E-Ticket required to carry print out of this E-Ticket or to show the soft copy of E-Ticket or E-Ticket SMS sent by MSRTC/AGENT on his Mobile, Tab, Laptop, etc. Along with Photo ID Card in original like Voter ID, Pan Card, Adhar Card, Driving License, Passport

etc</li>

  <li>Senior Citizen must carry his original photo ID as mentioned in E-Ticket or SMS during travel. Photo ID issued by appropriate authority should be enough elaborative and legible to establish a proof of age of 65 years or above and resident of State of Maharashtra.
</li>
  <li>If passenger having concessional Ticket found without valid ID, the ticket will be treated as Invalid Ticket and amount tendered towards E-Ticket will be forfeited in default. In addition the passenger would be required to purchase a fresh ticket as a normal passenger.
</li>
  <li>Corporation reserves the rights to change/cancel the bus service mentioned in the E-Ticket.</li>
  <li>Passenger will have to pay the fare difference if any in case of Revision of fare or Change of Service.
</li>
  <li>Cancellation Rules & Refund Procedure for E-Tickets: E-Ticket cancellation is permitted through M.S.R.T.C site(public.msrtcors.com). Cancellation is allowed before 4 hours of scheduled departure time from originating bus station. In case, if passenger is absent for journey, no refund will be given to the passenger. Following cancellation charges are applicable.
<br/>
1) 10% ticket fare will get deducted if the ticket is cancelled 24 hrs. before the departure time.
<br/>
II) 25% ticket fare will get deducted if the ticket is cancelled 12 hrs. before the departure time.
<br/>
III) 50% ticket fare will get deducted if the ticket is cancelled 4 hrs. before the departure time. The departure time means departure time of the originating bus station. Reservation charges

and convenience charges including GST charge are not refundable.

<p style={{textAlign:'center'}}>Wish You Hanny Tourney</p> </li>
</ul>
  </div>
  </>
}

export default E_Reservation