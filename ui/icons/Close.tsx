import React from "react";

const Close: React.FC<React.SVGProps<SVGElement>> = ({width="20px", height="20px", color="currentColor"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} fill={color}>
    <path d="M183.1 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L275.2 320 137.9 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4 137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L365.8 320l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320.5 274.7z"></path>
  </svg>
);

export default Close;