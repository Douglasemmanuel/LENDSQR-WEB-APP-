

const ArrowDown = ({ width = 12, height = 7, color = "#213F7D", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 12 7"
    {...props}
  >
    <path
      fill={color}
      d="M9.672.272c.841-.84 2.102.463 1.261 1.261l-4.75 4.751a.842.842 0 0 1-1.262 0L.255 1.66C-.545.819.717-.443 1.558.399l3.994 3.993 4.12-4.12Z"
    />
  </svg>
);

export default ArrowDown;
