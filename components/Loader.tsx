import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
