import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange} />
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <button type="submit">Create Blog Post</button>
      </div>
    </form>
  );
};

export default BlogForm;
