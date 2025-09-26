import * as React from "react";

const LowerLine = (props: any) => (
    <svg
        width={678}
        height={794}
        viewBox='0 0 678 794'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_42_80)'>
            <path
                d='M200.03 827.002C200.03 827.002 291.672 766.829 287.173 603.803C282.674 440.777 456.689 433.43 611.925 478.533C767.161 523.635 849.378 501.039 921.878 444.789C994.377 388.539 970.851 200.056 970.851 200.056'
                stroke='url(#paint0_linear_42_80)'
                strokeWidth={71}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_42_80'
                x={0.625885}
                y={0.65274}
                width={1173.27}
                height={1025.75}
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
                    stdDeviation={81.95}
                    result='effect1_foregroundBlur_42_80'
                />
            </filter>
            <linearGradient
                id='paint0_linear_42_80'
                x1={200.26}
                y1={824.268}
                x2={928.713}
                y2={158.552}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#E5EA48' />
                <stop offset={1} stopColor='#45E237' />
            </linearGradient>
        </defs>
    </svg>
);
export default LowerLine;
