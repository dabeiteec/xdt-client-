import * as React from "react";
const LowerArrowSvg = (props: any) => (
    <svg
        width={36}
        height={60}
        viewBox='0 0 36 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_47_36)'>
            <path
                d='M5.55292 41.4118C4.51139 40.3813 2.8227 40.3813 1.78117 41.4118C0.73961 42.4422 0.73961 44.1129 1.78117 45.1434L14.2244 57.4543C16.3076 59.5152 19.6849 59.5152 21.7681 57.4543L34.2189 45.1359C35.2604 44.1054 35.2604 42.4347 34.2189 41.4043C33.1774 40.3738 31.4886 40.3738 30.4472 41.4043L20.6695 51.0777V3.63866C20.6695 2.18133 19.4755 1 18.0025 1C16.5298 1 15.3355 2.18133 15.3355 3.63866V51.0903L5.55292 41.4118Z'
                fill='white'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_47_36'
                x={0}
                y={0}
                width={36}
                height={60}
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
                    stdDeviation={0.5}
                    result='effect1_foregroundBlur_47_36'
                />
            </filter>
        </defs>
    </svg>
);
export default LowerArrowSvg;
