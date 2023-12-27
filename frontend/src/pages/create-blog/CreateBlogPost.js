import React from 'react';
import { useState, useEffect } from 'react';
import BlogForm from "../../components/blog-form/BlogForm.js";
import Welcome from '../../components/welcome/Welcome.js';
import Filter from '../../components/filter/Filter.js';
import './CreateBlogPost.scss';

export default function CreateBlogPost() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 992);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 768);
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
    <div className='container'>
      <div className='row'>
        <Welcome />
      </div>
      <div className='row create-blog-container'>
        <div className={`col-md-4 filter-card ${isWideScreen ? 'border py-3' : ''}`}>
          <div className='filter-header'>
            <h2>Filter</h2>
            <Filter />
          </div>
        </div>
        <div className={`col-md-6 create-blog-card ${isWideScreen ? 'mx-5 py-3 border' : 'mt-4'}`}>
          <div className='create-blog-header'>
            <h2>Create a Blog</h2>
          </div>
          <BlogForm />
        </div>
      </div>
    </div>
  )
}
