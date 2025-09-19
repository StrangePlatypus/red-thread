import React from "react";

const Delete: React.FC<React.SVGProps<SVGElement>> = ({width="20px", height="20px", color="currentColor"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} fill={color}>
    <path d="M232.7 69.9 224 96h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-8.7-26.1C402.9 56.8 390.7 48 376.9 48H263.1c-13.8 0-26 8.8-30.4 21.9M512 208H128l21.1 323.1c1.6 25.3 22.6 44.9 47.9 44.9h246c25.3 0 46.3-19.6 47.9-44.9z"></path>
  </svg>
);

export default Delete;