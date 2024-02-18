import React from 'react'
import { seat } from '../assets/img'

const Seats = () => {
    const handlecolor = () => {
        
    }
  return <>
  <div className="card ">
    <span style={{textAlign:'right'}}><i class="bi bi-asterisk"></i></span>
    <hr />
    <div className='d-flex'>
<div className='seatsright'>
<div className='d-flex p-1 gap-2 mb-1'>
    <img src={seat} alt="" width={20} className='sofa' onClick={e => handlecolor()}/>
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>


</div>
<div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>

<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>
<div className='d-flex p-2 gap-2 mb-1'>
    <img src={seat} alt="" width={20} />
    <img src={seat} alt="" width={20} />
</div>

</div>
    </div>
  </div>

  <div className='d-flex'>
    
    <div className='d-flex gap-1 mt-2'>

    <div style={{backgroundColor:'gray', padding:'6px'}}>
    </div>
    <span className='fonts'>Not Available</span>
    
        
    </div>
  <div>
    <div className='d-flex gap-1 mt-2'>
    <div style={{backgroundColor:'gray', padding:'6px'}}>
    </div>
    <span className='fonts pl-2'>
         Available
        </span>
     
     </div>
     </div>
    </div>
  </>

}

export default Seats