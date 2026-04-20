import * as React from "react";
const EmptyTagSvg = (props: any) => (
    <svg
        width={84}
        height={75}
        viewBox='0 0 84 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <g opacity={0.8}>
            <rect width={84} height={71} rx={12} fill='#3B5447' />
            <g filter='url(#filter0_f_45_9)'>
                <path
                    d='M51.7548 16.4833C52.2288 14.8238 51.2682 13.0942 49.6085 12.6201C47.9491 12.1459 46.2195 13.1068 45.7454 14.7663L33.2453 58.5163C32.7712 60.1757 33.7321 61.9054 35.3916 62.3795C37.051 62.8538 38.7807 61.8929 39.2548 60.2332L51.7548 16.4833Z'
                    fill='white'
                />
                <path
                    d='M23.1222 23.1214C24.1598 24.5005 23.8829 26.4597 22.5038 27.4973L12.5279 35.0029C10.8664 36.2533 10.8663 38.747 12.5279 39.9973L22.5038 47.5029C23.8829 48.5408 24.1598 50.4998 23.1222 51.8789C22.0845 53.2583 20.1254 53.5348 18.7462 52.4973L8.77032 44.9917C3.78556 41.2411 3.78554 33.7592 8.77029 30.0088L18.7462 22.503C20.1254 21.4654 22.0845 21.7422 23.1222 23.1214Z'
                    fill='white'
                />
                <path
                    d='M61.8779 51.8789C60.8404 50.4998 61.1173 48.5408 62.4964 47.5029L72.4723 39.9973C74.1339 38.747 74.1339 36.2533 72.4723 35.0029L62.4964 27.4973C61.1173 26.4597 60.8404 24.5005 61.8779 23.1214C62.9157 21.7422 64.8748 21.4654 66.2539 22.503L76.2298 30.0088C81.2145 33.7592 81.2145 41.2411 76.2298 44.9917L66.2539 52.4973C64.8748 53.5348 62.9157 53.2583 61.8779 51.8789Z'
                    fill='white'
                />
            </g>
        </g>
        <defs>
            <filter
                id='filter0_f_45_9'
                x={4}
                y={-1}
                width={77}
                height={77}
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
                    result='effect1_foregroundBlur_45_9'
                />
            </filter>
        </defs>
    </svg>
);
export default EmptyTagSvg;
