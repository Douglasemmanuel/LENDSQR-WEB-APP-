
const LeftButton = ({ size = 24, color = "#213F7D", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <rect
      width={size}
      height={size}
      fill={color}
      fillOpacity={0.1}
      rx={4}
    />
    <path
      fill={color}
      d="M15.006 16.057c.841.841-.463 2.103-1.261 1.261l-4.75-4.75a.842.842 0 0 1 0-1.261l4.624-4.667c.84-.799 2.102.463 1.26 1.303l-3.993 3.994 4.12 4.12Z"
      opacity={0.6}
    />
  </svg>
);

export default LeftButton;
