import * as React from "react";

const Karma = ({
  size = 16,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 13) / 16} // maintain aspect ratio 16x13
    viewBox="0 0 16 13"
    fill="none"
    color={color}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path
        d="M15.88 4.86 14.74 6l1.14 1.14a.4.4 0 0 1 0 .57l-.57.57a.402.402 0 0 1-.57 0L13.6 7.14l-1.14 1.14a.403.403 0 0 1-.57 0l-.57-.57a.403.403 0 0 1 0-.57L12.46 6l-1.14-1.14a.403.403 0 0 1 0-.57l.57-.57a.403.403 0 0 1 .57 0l1.14 1.14 1.14-1.14a.403.403 0 0 1 .57 0l.57.57a.4.4 0 0 1 0 .57Z"
        opacity={0.4}
      />
      <path d="M7.84 7.2h-.417a4.352 4.352 0 0 1-3.646 0H3.36A3.36 3.36 0 0 0 0 10.56v1.04a1.2 1.2 0 0 0 1.2 1.2H10a1.2 1.2 0 0 0 1.2-1.2v-1.04A3.361 3.361 0 0 0 7.84 7.2ZM5.6 6.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v12.8H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Karma;
