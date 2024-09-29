import React from 'react';

export const SkeletonText = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
    </div>
  );
};
