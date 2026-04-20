import * as React from "react";
const RightLine = (props: any) => (
    <svg
        width={635}
        height={820}
        viewBox='0 0 635 820'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_42_147)'>
            <path
                d='M263.303 925.807C263.303 925.807 352.013 861.391 339.853 698.757C327.692 536.122 501.169 520.601 658.355 558.353C815.54 596.105 896.603 569.668 966.377 510.07C1036.15 450.473 1003.79 263.306 1003.79 263.306'
                stroke='url(#paint0_linear_42_147)'
                strokeWidth={71}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_42_147'
                x={0.0000457764}
                y={-0.000198364}
                width={1274.58}
                height={1189.11}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                />
                <feGaussianBlur
                    stdDeviation={113.9}
                    result='effect1_foregroundBlur_42_147'
                />
            </filter>
            <linearGradient
                id='paint0_linear_42_147'
                x1={263.403}
                y1={923.065}
                x2={959.744}
                y2={223.829}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#E5EA48' />
                <stop offset={1} stopColor='#45E237' />
            </linearGradient>
        </defs>
    </svg>
);
export default RightLine;
