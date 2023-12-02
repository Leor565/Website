// SearchPage.js
import React, { useState } from 'react';

const SearchPage = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    const result = await onSearch(searchTitle);
    setSearchResult(result);
  };

  return (
    <div>
      <h2>Search for a Book by Title</h2>
      <input
        type="text"
        placeholder="Enter title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult && (
        <div>
          <h3>Book Information</h3>
          <ul>
            <li><strong>Title:</strong> {searchResult.title}</li>
            <li><strong>Author:</strong> {searchResult.author}</li>
            <li><strong>Year:</strong> {searchResult.year}</li>
            <li><strong>Genre:</strong> {searchResult.genre}</li>
            <li><strong>Length:</strong> {searchResult.length}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
