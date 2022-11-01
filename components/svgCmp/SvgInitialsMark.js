import * as React from "react";

const SvgKarinMark = (props) => {
  const { width, height } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 800 800">
      <path
        fill="#173342"
        d="M777.5 258.79V120.34H377.41v1.07h-1.72L195 332.37V121.41H22.5v558.25H195V543.44l89.12-93.36 117.7 229.58h212.44L479.81 460.15H723.4V331.21H402.28l70.02-72.42z"
      />
    </svg>
  );
};

export default SvgKarinMark;
