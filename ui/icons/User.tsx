import * as React from "react";

const User: React.FC<React.SVGProps<SVGElement>> = ({width="20px", height="20px", color="currentColor"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} fill={color}>
    <path d="M320 312c66.3 0 120-53.7 120-120S386.3 72 320 72s-120 53.7-120 120 53.7 120 120 120m-29.7 56C191.8 368 112 447.8 112 546.3c0 16.4 13.3 29.7 29.7 29.7h356.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3z"></path>
  </svg>
);

export default User;