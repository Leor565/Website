// DeleteProductByTitle.js
import React, { useState } from 'react';

const DeleteProductByTitle = ({ onDeleteProduct }) => {
  const [title, setTitle] = useState('');

  const handleDelete = () => {
    onDeleteProduct(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Delete Product by Title</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default DeleteProductByTitle;