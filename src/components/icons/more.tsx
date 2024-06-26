function MoreIcon({ color = "currectColor", size = "1em" }) {
  return (
    <svg
      stroke={color}
      fill={color}
      stroke-width="0"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export default MoreIcon;
