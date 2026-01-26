

const Logo
 = ({
  width = 174,
  height = 36,
  primaryColor = "#213F7D",
  secondaryColor = "#39CDCC",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 174 36"
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M0 2.665c0-.552.443-1 .99-1h2.97c.547 0 .99.448.99 1v18.003c0 .553.443 1 .99 1h12.87c.547 0 .99-.447.99-1v-3c0-.553-.443-1-.99-1h-5.94c-1.64 0-2.97-1.344-2.97-3V4.665c0-1.657 1.33-3 2.97-3h8.91c1.64 0 2.97 1.343 2.97 3v19.003c0 1.657-1.33 3-2.97 3H2.97c-1.64 0-2.97-1.343-2.97-3V2.665Zm19.8 5.001c0-.552-.443-1-.99-1h-3.96v4c0 .553.443 1 .99 1h3.96v-4Z"
      clipRule="evenodd"
    />

    <path
      fill={primaryColor}
      d="M35.325 0v27.805h4.764V0h-4.764ZM63.539 19.73c.748-8.075-3.308-12.132-9.805-12.132-6.3 0-10.316 4.296-10.316 10.263 0 6.285 3.977 10.462 10.67 10.462 2.954 0 6.3-1.035 8.348-3.183l-3.071-3.063c-1.102 1.154-3.426 1.83-5.198 1.83-3.386 0-5.473-1.75-5.788-4.177h15.16Z"
    />

    <defs>
      <linearGradient
        id="a"
        x1="0"
        x2="26.253"
        y1="38.921"
        y2="-4.224"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={primaryColor} />
        <stop offset="1" stopColor={secondaryColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo
;
