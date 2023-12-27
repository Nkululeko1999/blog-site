import React from 'react';
import DestinationSideBar from '../../components/dest-sidebar/DestinationSideBar.js';
// import Welcome from '../../components/welcome/Welcome.js';

export default function Destinations() {
  return (
    <div className='container'>
    {/* <div className='row'>
      <Welcome />
    </div> */}
    <div className='row create-blog-container'>
      <div className='col-md-3 px-0'>
        <div className=''>
          <DestinationSideBar />
        </div>
      </div>
      <div className='col-md-8'>
        <div className=''>
        </div>
      </div>
    </div>
  </div>
  )
}
