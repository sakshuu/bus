// import React from 'react'

// const Footer = () => {
//   return <>
//   <footer style={{backgroundColor:'#404040'}} className='p-4'>
//     <div className="container">

//     <hr style={{color:'white'}}/>
//     <p style={{color:'white'}}>Copyrights2024</p>
//     </div>
//   </footer>
//   </>
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#404040', position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 1000 }} className='pt-3 pb-1'>
      <div className="container">
        <hr style={{ color: 'white' }} />
        <div className='d-flex  justify-content-between' style={{ color: 'white' }}>
        <span >Copyrights 2024. last update on 2/21/2024</span>
        <span>Privacy Police</span>
        <span>terms and conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
