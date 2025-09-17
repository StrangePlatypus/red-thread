import React from "react";

const Calendar: React.FC<React.SVGProps<SVGElement>> = ({width="20px", height="20px", color="currentColor"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} fill={color}>
    <path d="M216 64c13.3 0 24 10.7 24 24v40h160V88c0-13.3 10.7-24 24-24s24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h32V88c0-13.3 10.7-24 24-24m0 112h-56c-8.8 0-16 7.2-16 16v48h352v-48c0-8.8-7.2-16-16-16zm-72 112v192c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V288z"></path>
  </svg>
);

export default Calendar;