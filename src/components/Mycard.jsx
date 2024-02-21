import React from 'react'
import { covid, live_track, qr } from '../assets/img'

const Mycard = () => {
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
    
  return <>
  <div className="container mt-3" >

  <div className="row">
    {
        data.map(item => 
            <div className="col-md-4 col-sm-6">
  {/* <div className="card p-4 m-4" style={{boxShadow:'2px 2px 2px 2px #A9A9A9'}}> */}
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
  </>
}

export default Mycard