import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };


  const handleImageChange = (event) => {
    // Assuming you want to handle image uploads
    // This is just a basic example, you may want to enhance it
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can perform actions like submitting the data to a server or updating state
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
    
    // Reset the form
    setTitle('');
    setContent('');
    setImage(null);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block', 'list', 'bullet', 'link', 'image', 'video',
    'color', 'background', 'align'
  ];

  return (
    <form onSubmit={handleSubmit} className="mt-4">
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title:</label>
      <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} />
    </div>
    <div className="mb-4">
      <label htmlFor="content" className="form-label">Content:</label>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        style={{ height: '250px' }}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="image" className="form-label mt-5">Upload Image:</label>
      <input type="file" className="form-control" id="image" accept="image/*" onChange={handleImageChange} />
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Create Blog Post</button>
    </div>
  </form>
  );
};

export default BlogForm;
