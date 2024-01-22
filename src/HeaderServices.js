import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import './HeaderServices.css';


function HeaderServices(){
    const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Pet-Care, it is our priority to ensure the well-being
                of your furry friends!</h1>
              <a className='tell-me-more-text' onClick={() => window.scrollTo({ top: 620, behavior: "smooth" })}>
              <h4 className='mb-3'>Let's Tell You Everything About What We Love Doing In Pet-Care</h4>
              </a>
              <MDBBtn tag="a" outline size="lg" id='tell-me-more-btn' onClick={() => window.scrollTo({ top: 620, behavior: "smooth" })}>
                Tell Me More
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderServices;