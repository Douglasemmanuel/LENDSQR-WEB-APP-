
const Logout = ({
  width = 16,
  height = 16,
  fill = "#213F7D",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g fill={fill} clipPath="url(#a)">
      <path
        d="M5.625 14H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2.625A.375.375 0 0 1 6 2.375v1.25A.375.375 0 0 1 5.625 4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.625a.375.375 0 0 1 .375.375v1.25a.375.375 0 0 1-.375.375Z"
        opacity={0.4}
      />
      <path d="m11.031 2.76 4.747 4.706a.75.75 0 0 1 0 1.065l-4.75 4.713a.753.753 0 0 1-1.06-.003l-.684-.685a.752.752 0 0 1 .025-1.084l2.425-2.222H5.75A.748.748 0 0 1 5 8.5v-1a.748.748 0 0 1 .75-.75h5.984L9.31 4.528a.75.75 0 0 1-.021-1.081l.684-.685a.75.75 0 0 1 1.06-.003Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Logout;
