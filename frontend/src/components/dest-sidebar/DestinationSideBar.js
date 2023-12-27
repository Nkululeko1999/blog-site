import React from 'react';
import './DestinationSideBar.scss';
import { NavLink } from 'react-router-dom';

export default function DestinationSideBar() {
  return (
    <div class="side-bar-container p-0 border border-2" id="navbarToggleExternalContent">
      <header class="px-3 pt-3 ps-4 d-flex align-content-center">
        <i class="bi bi-person-circle nav-icons"></i>
        <p className='mb-0 mt-1'>Nkululeko Mkhatywa</p>
      </header>
      
      <hr className='divider mb-0' />

      <ul class="nav flex-column ">
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-globe-europe-africa nav-icons"></i>
                Visited Places
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-box2-heart-fill nav-icons"></i>
                Places wish to Visit
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-book-half nav-icons"></i>
                Planned Trips
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-sign-merge-right-fill nav-icons"></i>
                History Trips
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-search nav-icons"></i>
                Search Trips
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-tools nav-icons"></i>
                Create Trips
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-wallet-fill nav-icons"></i>
                Budget Analysis
            </NavLink>
        </li>
        <li class="nav-item">
            <NavLink className='nav-link dest-nav-link d-flex align-items-center'>
                <i class="bi bi-envelope-paper-heart-fill nav-icons"></i>
                Invitations
            </NavLink>
        </li>
      </ul>
    </div>
  )
}
