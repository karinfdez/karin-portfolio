import * as React from "react";

function SvgInitialsMarklight(props) {
    const { width, height } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 800 800">
            <path
                fill="#23424c"
                d="M777.83 258.67V120.1H377.39v1.08h-1.72L194.82 332.31V121.18H22.17V679.9h172.65V543.56l89.2-93.44L401.83 679.9h212.61L479.88 460.2h243.8V331.15h-321.4l70.08-72.48z"
            />
        </svg>
    );
}

export default SvgInitialsMarklight;
