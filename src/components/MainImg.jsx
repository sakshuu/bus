import React, { useEffect, useState } from "react";
import { bus_home } from "../assets/img";
import "../assets/css/busSchedule.css";
import { useForm } from "react-hook-form";
import { BusSearch } from "../redux/busSchedule/busAction";
import { useDispatch } from "react-redux";
import BusSchedule from "./BusSchedule";
import { toast } from "react-toastify";
import { covid, live_track, qr } from '../assets/img'
import Mycard from "./Mycard";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const MainImg = () => {
  const [showFooter, setShowFooter] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onBusSearch = (data) => {
    const payload = {
      From: data.startLocation,
      To: data.endLocation,
      calender: data.busScheduleData,
    };
    debugger;
    dispatch(BusSearch(payload))
      .then((action) => {
        const data = action.payload;
        toast.dismiss();
        if (data && data.returnCode == "200") {
          console.log("Search Successfully!");
        } else {
          toast.error(` ${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(` ${error.message}`, {
          position: "top-right",
          style: {
            backgroundColor: "white",
            color: "red",
          },
        });
      });
  };
 

  useEffect(() => {
    function handleScroll() {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const data =  [
    {   
          id:"1",
          img:covid,
          title:'COVID-19 Travel Update',
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque non culpa minus pariatur."
    },
    {   
          id:"2",
          img:qr,
          title:'Download our App',
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque non culpa minus pariatur earum ab."
    },
    {   
          id:"1",
          img:live_track,
          title:'Live Tracking',
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque non culpa minus pariatur earum ab."
    }
        ]
  return (
    <>
      <form onSubmit={handleSubmit(onBusSearch)}>
        <div className="img-card">
          <img src={bus_home} alt="" className="homeimg" />
          <div className="heading">
            <h2>
              "Safe & Accident Free <br />
              Bus Service"
            </h2>

            <p className="mt-4 text-desc fonts">
              Lorem ipsum dolor sit, amet amet consectetur <br /> adipisicing
              elit. Veniam est odio, distinctio <br /> ducimus ea debitis quam,
              cum eum dolor id <br /> asperiores, exercitationem nisi cupiditate
              quos
            </p>
          </div>


          <div class="container">
              <nav class="navbar navbar-expand-lg navbar-sub " style={{boxShadow:'2px 2px 2px 2px #E8E8E8'}}>
                <button
                  class="navbar-toggler toggle-icon"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltfilter"
                >
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltfilter">
                  <div class="navbar-nav navbar-inp gap-4">
                    <div className="inp-main">
                      <input
                        {...register("From", {
                          required: "From is required.*",
                        })}
                        type="text"
                        class="form-control inp-filter"
                        id="From"
                        placeholder="From"
                      />
                      <i class="inp-icon bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="inp-main">
                      <input
                        {...register("To", {
                          required: "To is required.*",
                        })}
                        type="text"
                        class="form-control inp-filter"
                        id="To"
                        placeholder="To"
                      />
                      <i class="inp-icon bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="inp-main">


<div className="form-group">
      <input
        id="calendar"
        type="date"
        className="form-control inp-filter"
      />
    </div>
                    </div>
                    <button type="submit" class="btn btn-danger px-4 btn-search">
                      Search
                    </button>
                  </div>
                </div>
              </nav>
          </div>
        </div>
      </form>



{/* cards start */}
      {/* <div className="container" style={{marginTop:'100px', marginBottom:'100px'}} >
<div className="row align-items-start">
  {
    data.map(item => 
    <div className="col">

<div className="card card-container p-1 mt-2" style={{boxShadow:'2px 2px 2px 2px #E8E8E8'}}>
  <div className="d-flex ">

<div><img src={item?.img} alt=""  className="mt-4" width={110} /></div>
<div>
  <p style={{fontWeight:'bold'}}>{item.title}</p>
  <p>{item?.desc}</p>
</div>
  </div>

</div>
</div>
          )
}
          </div>
          </div> */}
          <div className="container mt-3">
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4 col-sm-12">
                <div
                  className="card p-3 m-2"
                  style={{ boxShadow: "2px 2px 2px 2px #E8E8E8", height:
                "100%", width:'90%'}}
                >
                  <div className="d-flex ">
                    <div>
                      <img src={item?.img} alt="" width={110} />
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold" }}>{item.title}</p>
                      <p>{item?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* card end */}


      <BusSchedule />


      {/* footer start */}
      {/* <footer style={{ backgroundColor: '#404040', position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 1000 }} className='pt-3 pb-1'>
      <div className="container">
        <hr style={{ color: 'white' }} />
        <div className='d-flex  justify-content-between' style={{ color: 'white' }}>
        <span >Copyrights 2024. last update on 2/21/2024</span>
        <span>Privacy Police</span>
        <span>terms and conditions</span>
        </div>
      </div>
    </footer> */}
          {showFooter && (
        <footer style={{ backgroundColor: '#404040', position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 1000 }} className='pt-3 pb-1 mt-4'>
          <div className="container">
            <hr style={{ color: 'white', maxWidth:'100%', marginLeft:'90px', marginRight:'90px' }} />
            {/* classname added  */}
            <div className='d-flex  justify-content-center flex-wrap footer-main' style={{ gap:'90px',color: 'white' }}>
              <span>Copyrights 2024. Last updated on : 06/03/2024</span>
              <span>Privacy Policy</span>
              <span>Terms and Conditions</span>
            </div>
          </div>
        </footer>
      )}
    {/* </div> */}
  );

    {/* footer end */}
    </>
  );
};

export default MainImg;
