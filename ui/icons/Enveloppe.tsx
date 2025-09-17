import React from "react";

const Enveloppe: React.FC<React.SVGProps<SVGElement>> = ({width="20px", height="20px", color="currentColor"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} fill={color}>
    <path d="M112 128c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156a48 48 0 0 0 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48zM64 260v188c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V260L377.6 408.8c-34.1 25.6-81.1 25.6-115.2 0z"></path>
  </svg>
);

export default Enveloppe;