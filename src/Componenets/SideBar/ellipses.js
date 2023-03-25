import React, { useState } from 'react';

const Lake=()=> {
  const [showLinks, setShowLinks] = useState(false);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  return (
    <div>
      <button onClick={toggleLinks}>{showLinks ? 'Hide' : 'Show'}</button>
      {showLinks && (
        <div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
}
export default Lake;