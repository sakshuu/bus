

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#404040', position: 'fixed', left: 0, bottom: 0, width: '60%', zIndex: 1000, padding:"100px" }}>
      <div className="container">
        <hr style={{ color: 'white' }} />
        <div style={{ color: 'white', padding:'-200px' }}>
        <span style={{marginLeft:'100px'}} >Copyrights 2024. last update on 2/21/2024</span>
        {/* <span>Privacy Police</span> */}
        {/* <span>terms and conditions</span> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
