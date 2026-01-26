import * as React from "react";

const ThickArrowDown = ({ width = 8, height = 5, color = "#213F7D", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 8 5"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M3.06 3.87a.802.802 0 0 0 1.215 0L7.15.675C7.486.302 7.352 0 6.85 0H.483C-.018 0-.15.305.184.675L3.06 3.87Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ThickArrowDown;
