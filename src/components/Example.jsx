import React, { useState } from 'react';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onClick={() => setIsActive(!isActive)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
      }`}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

export default ToggleButton;