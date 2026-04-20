import * as React from "react";

const LeftLine = (props: any) => (
    <svg
        width={1000}
        height={1080}
        viewBox='0 0 1000 1080'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_42_146)'>
            <path
                d='M285.029 1080.19C285.029 1080.19 287.756 961.872 416.19 859.807C544.624 757.741 466.989 602.557 357.72 497.691C248.45 392.826 226.585 307.077 235.44 207.853C244.295 108.63 401.558 6.46716 401.558 6.46716'
                stroke='url(#paint0_linear_42_146)'
                strokeOpacity={0.4}
                strokeWidth={263}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_42_146'
                x={-282.529}
                y={-509.748}
                width={1281.69}
                height={2106.14}
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
                    stdDeviation={192.35}
                    result='effect1_foregroundBlur_42_146'
                />
            </filter>
            <linearGradient
                id='paint0_linear_42_146'
                x1={287.036}
                y1={1078.21}
                x2={410.295}
                y2={10.8804}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#E5EA48' />
                <stop offset={1} stopColor='#45E237' />
            </linearGradient>
        </defs>
    </svg>
);
export default LeftLine;
