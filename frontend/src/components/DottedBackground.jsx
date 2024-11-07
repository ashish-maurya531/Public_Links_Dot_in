import React from 'react';

const DottedBackground = () => (
  <div className="absolute inset-0 z-0">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.25,
        }}
      />
    ))}
  </div>
);

export default DottedBackground;