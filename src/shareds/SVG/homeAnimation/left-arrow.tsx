import * as React from "react";
const LeftArrowSvg = (props: any) => (
    <svg
        width={60}
        height={36}
        viewBox='0 0 60 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g filter='url(#filter0_f_47_45)'>
            <path
                d='M18.5882 5.55292C19.6187 4.51139 19.6187 2.8227 18.5882 1.78117C17.5578 0.73961 15.8871 0.73961 14.8566 1.78117L2.54569 14.2244C0.484772 16.3076 0.484769 19.6849 2.54569 21.7681L14.8641 34.2189C15.8946 35.2604 17.5653 35.2604 18.5957 34.2189C19.6262 33.1774 19.6262 31.4886 18.5957 30.4472L8.92232 20.6695H56.3613C57.8187 20.6695 59 19.4755 59 18.0025C59 16.5298 57.8187 15.3355 56.3613 15.3355H8.90968L18.5882 5.55292Z'
                fill='white'
            />
        </g>
        <defs>
            <filter
                id='filter0_f_47_45'
                x={0}
                y={0}
                width={60}
                height={36}
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
                    result='effect1_foregroundBlur_47_45'
                />
            </filter>
        </defs>
    </svg>
);
export default LeftArrowSvg;
