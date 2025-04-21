import * as React from "react";
const Custom = (props) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.9px;}"
        }
      </style>
    </defs>
    <path
      fill="none"
      stroke="#020202"
      strokeMiterlimit="10px"
      strokeWidth="1.9px"
      d="M8.2,22.45,3.09,17.34a2,2,0,0,1,2.85-2.85L7.25,15.8V6.41A2,2,0,0,1,9,4.41,1.91,1.91,0,0,1,11.05,6.3V12l5,.72A1.9,1.9,0,0,1,17.7,14.6h0a17.16,17.16,0,0,1-1.81,7.67l-.09.18"
    />
    <path
      fill="none"
      stroke="#020202"
      strokeMiterlimit="10px"
      strokeWidth="1.9px"
      d="M11.05,10.65a4.4,4.4,0,0,0,1.46-1,4.75,4.75,0,1,0-6.72,0,4.4,4.4,0,0,0,1.46,1"
    />
    <polyline
      fill="none"
      stroke="#020202"
      strokeMiterlimit="10px"
      strokeWidth="1.9px"
      points="18.65 3.45 21.5 6.3 18.65 9.15"
    />
    <line
      fill="none"
      stroke="#020202"
      strokeMiterlimit="10px"
      strokeWidth="1.9px"
      x1={13.9}
      y1={6.3}
      x2={21.5}
      y2={6.3}
    />
  </svg>
);
export default Custom;
