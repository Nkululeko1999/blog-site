import React from 'react';
import BlogForm from "../../components/blog-form/BlogForm.js";
import Welcome from '../../components/welcome/Welcome.js';

export default function CreateBlogPost() {
  return (
    <div className='container'>
      <div className='row'>
        <Welcome />
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='filter-header'>
            <h2>Filter</h2>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='create-blog-header'>
            <h2>Share your Experience</h2>
          </div>
          <BlogForm />
        </div>
      </div>
    </div>
  )
}
