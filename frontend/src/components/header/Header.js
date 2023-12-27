import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo.js';
import './Header.scss';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 992);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 992);
  };

  useEffect(() => {
    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <NavLink to="/" exact activeClassName="navbar-brand">
            <Logo />
          </NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`collapse collapse-css navbar-collapse ${isWideScreen ? 'justify-content-end' : ''}`} id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/categories"} className={"nav-link"}>Categories</NavLink>
            </li>

            <li class="nav-item">
              <NavLink to={"/destinations"} className={"nav-link"}>Destinations</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/create-blog"} className={"nav-link"}>Create Blog</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/login"} className={"nav-link"}>Login</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/register"} className={"nav-link"}>Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
