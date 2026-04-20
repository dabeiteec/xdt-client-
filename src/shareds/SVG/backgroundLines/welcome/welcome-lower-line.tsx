import { FC } from "react";

interface LowerLineProps {
    width?: number;
    height?: number;
    strokeWidth?: number;
    blur?: number;
    colorTheme?: boolean;
}

const LowerLine: FC<LowerLineProps> = ({
    width = 1000, // базовая ширина
    height = 794, // базовая высота
    strokeWidth = 40, // толщина линии
    blur = 82, // сила размытия
    ...props
}) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_dynamic)' transform='translate(700, 0)'>
            <path
                d='M200.03 827.002C200.03 827.002 291.672 766.829 287.173 603.803C282.674 440.777 456.689 433.43 611.925 478.533C767.161 523.635 849.378 501.039 921.878 444.789C994.377 388.539 970.851 200.056 970.851 200.056'
                stroke='url(#paint0_linear_dynamic)'
                strokeWidth={strokeWidth}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_dynamic'
                x={0}
                y={0}
                width={width}
                height={height}
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
                    stdDeviation={blur}
                    result='effect1_foregroundBlur_dynamic'
                />
            </filter>
            <linearGradient
                id='paint0_linear_dynamic'
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
