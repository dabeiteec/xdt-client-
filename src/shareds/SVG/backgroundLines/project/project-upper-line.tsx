import * as React from "react";

const ProjectUpperLine = (props: any) => (
    <svg
        width={1077}
        height={731}
        viewBox='0 0 1077 731'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_51_262)'>
            <path
                d='M-148.077 491.922C-148.077 491.922 -38.6629 438.542 46.7153 319.591C132.093 200.641 281.402 177.588 386.354 194.857C491.307 212.127 572.307 187.227 663.594 138.664C754.882 90.1014 838.291 -45.5617 838.291 -45.5617'
                stroke='url(#paint0_linear_51_262)'
                strokeWidth={30}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_51_262'
                x={-386.586}
                y={-284.067}
                width={1463.38}
                height={1014.5}
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
                    stdDeviation={100}
                    result='effect1_foregroundBlur_51_262'
                />
            </filter>
            <linearGradient
                id='paint0_linear_51_262'
                x1={169.771}
                y1={310.126}
                x2={607.973}
                y2={240.975}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#45E237' />
                <stop offset={0.120192} stopColor='#45E237' />
                <stop offset={0.2} stopColor='#E5EA48' />
                <stop offset={1} stopColor='#E5EA48' />
            </linearGradient>
        </defs>
    </svg>
);
export default ProjectUpperLine;
