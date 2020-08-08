import React from 'react';

const Searchbox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="search"
        placeholder="Search Champions"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
