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
          {/* <img src={bus_home} alt="" className="homeimg" />
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
          </div> */}
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
              
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
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
                  </div>
                  <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
              
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
              
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          <div class="container">
            <div className="container-home">
              <nav class="navbar navbar-expand-lg navbar-sub bg-light z-4">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltfilter"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltfilter">
                  <div class="navbar-nav gap-4 ">
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
                      {/* jhvuy */}
                      <i class="inp-icon bi bi-geo-alt-fill"></i>
                    </div>
                    {/* hvyu */}

                    <div className="inp-main">
                      {/* <input
                        id="calender"
                        type="date"
                        className="form-control inp-filter"
                        // onClick={() =>
                        //   document.querySelector(".inp-filter").click()
                        // }
                        style={{textDecorationColor:'red'}}
                      /> */}

<div className="form-group">
      <input
        id="calendar"
        type="date"
        className="form-control inp-filter"
      />
      {/* <FontAwesomeIcon icon={faCalendar} className="calendar-icon" /> */}
    </div>

                    </div>

{/* <div className="inp-main">
      <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
      <input
        id="calender"
        type="date"
        className="form-control inp-filter"
        onClick={() =>
          document.querySelector(".inp-filter").click()
        }
        style={{ color: "red" }}
      />
    </div> */}


                    <button type="submit" class="btn btn-danger px-4 h-25">
                      Search
                    </button>
                    {/* <p>,sbdcsjk</p> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </form>



{/* cards start */}
      <div className="container" style={{marginTop:'100px', marginBottom:'100px'}} >
<div className="row">
  {
      data.map(item => 
          <div className="col-md-4 col-sm-6">
<div className="card p-3" style={{boxShadow:'2px 2px 2px 2px #E8E8E8'}}>
  <div className="d-flex gap-2">

<div><img src={item?.img} alt="" width={130} /></div>
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
            <hr style={{ color: 'white' }} />
            <div className='d-flex  justify-content-center gap-4' style={{ color: 'white' }}>
              <span>Copyrights 2024. Last updated on 2/21/2024</span>
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
