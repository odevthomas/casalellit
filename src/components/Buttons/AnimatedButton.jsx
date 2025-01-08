import React, { useState } from 'react';

const AnimatedButton = ({ onClick, direction = "left", size = "12", color = "#f6472c" }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick(); // Calls the onClick function passed from the parent, if provided
    setTimeout(() => setClicked(false), 200); // Resets the clicked state after 200ms to trigger animation
  };

  const arrowStyles = {
    left: "group-hover:translate-x-[-300%] left-0",
    right: "group-hover:translate-x-[300%] right-0"
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex h-${size} w-${size} items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 ${clicked ? 'scale-90' : ''}`}
    >
      {/* Arrow based on direction prop */}
      <div className={`absolute transition-all transform ${arrowStyles[direction]}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {direction === "left" ? (
            <>
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </>
          ) : (
            <>
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </>
          )}
        </svg>
      </div>
    </button>
  );
};

export default AnimatedButton;
