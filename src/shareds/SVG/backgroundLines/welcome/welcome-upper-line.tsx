import * as React from "react";

const UpperLine = (props: any) => (
    <svg
        width='2200' // 👈 увеличиваем физическую ширину SVG
        height='501'
        viewBox='0 0 1920 551' // 👈 оставляем исходный viewBox
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_41_13)' transform='translate(-40, -50)'>
            {/* 👆 сдвигаем чуть влево, чтобы вылезла за экран */}
            <path
                d='M1989.47 243.466C1989.47 243.466 1774 249.081 1542.36 133.562C1310.73 18.0419 1057.59 102.937 907.151 214.537C756.712 326.136 609.204 352.967 426.121 351.407C243.038 349.846 0.762781 206.811 0.762781 206.811'
                stroke='url(#paint0_linear_41_13)'
                strokeWidth={51}
                strokeLinecap='round'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_41_13'
                x={-300}
                y={-121.053}
                width={2500}
                height={671.923}
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
                    result='effect1_foregroundBlur_41_13'
                />
            </filter>
            <linearGradient
                id='paint0_linear_41_13'
                x1={1985.16}
                y1={241.687}
                x2={61.5079}
                y2={548.614}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#E5EA48' />
                <stop offset={1} stopColor='#45E237' />
            </linearGradient>
        </defs>
    </svg>
);

export default UpperLine;
