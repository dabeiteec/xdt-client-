type ScreenParams = {
    titleFontSize: number;
    titleWeight: number;
    linkButtonSize: number;
    linkButtonCorner: number;
    linkIconSize: number;
    continueButtonTextSize: number;
    continueButtonTextWeight: number;
    continueButtonCorner: number;
    dropGlowButton: number;
    innerGlow: number;
    continueButtonWidth: number;
    continueButtonHeight: number;
};

interface WelcomePageParams {
    COMPUTER: {
        [key: number]: Partial<ScreenParams>;
    };
    LAPTOP: {
        [key: number]: Partial<ScreenParams>;
    };
    TABLET: {
        [key: number]: Partial<ScreenParams>;
    };
    MOBILE: {
        [key: number]: Partial<ScreenParams>;
    };
    LARGE_SCREEN: {
        [key: number]: Partial<ScreenParams>;
    };
}

const regular = 400;
const bolt = 700;

export const WelcomePageConfig: WelcomePageParams = {
    COMPUTER: {
        //1920 x 1080 (Full HD) - стандартный монитор
        1920: {
            titleFontSize: 96,
            titleWeight: bolt,
            linkButtonSize: 95,
            linkButtonCorner: 100,
            linkIconSize: 75,
            continueButtonTextSize: 40,
            continueButtonTextWeight: regular,
            continueButtonCorner: 12,
            continueButtonWidth: 400,
            continueButtonHeight: 80
        },
        //1536 x 864 (Common laptop resolution)
        1536: {},
        //1366 x 768 (HD+ Laptop standard)
        1366: {},
        //1280 x 720 (HD)
        1280: {},
        //1440 x 900 (WXGA+)
        1440: {},
        //2560 x 1440 (QHD / 2K)
        2560: {},
        //3440 x 1440 (UltraWide QHD)
        3440: {}
    },
    LAPTOP: {
        // 1280 x 800 (Standard small laptop/Netbook)
        1280: {},
        // 1366 x 768 (Most common laptop resolution)
        1366: {},
        // 1440 x 900 (MacBook Air 13" historical)
        1440: {},
        // 1536 x 864 (Common modern laptop)
        1536: {},
        // 1920 x 1080 (Full HD Laptop)
        1920: {},
        // 2560 x 1600 (e.g., MacBook Pro 16")
        2560: {},
        // 2880 x 1800 (MacBook Pro 15" Retina)
        2880: {},
        // 3072 x 1920 (MacBook Pro 14")
        3072: {}
    },
    TABLET: {
        //768 x 1024 (iPad standard)
        768: {},
        //810 x 1080 (iPad Air landscape)
        810: {},
        //820 x 1180 (iPad Pro 10.5")
        820: {},
        //800 x 1280 (Various Android tablets)
        800: {},
        //1280 x 800 (Android tablets landscape)
        1280: {},
        //1024 x 1366 (iPad Pro 12.9")
        1024: {}
    },
    MOBILE: {
        //360 x 800 (Samsung Galaxy A12, etc.)
        360: {},
        //390 x 844 (iPhone 12/13/14 Pro)
        390: {},
        //393 x 873 (Pixel 6/7 Pro)
        393: {},
        //412 x 915 (Samsung Galaxy S20+/S21+)
        412: {},
        //375 x 812 (iPhone 12/13/14 Mini, X/XS/11 Pro)
        375: {},
        //414 x 896 (iPhone 11/XR)
        414: {},
        //428 x 926 (iPhone 12/13/14 Pro Max)
        428: {}
    },
    LARGE_SCREEN: {
        //3840 x 2160 (4K UHD standard)
        3840: {},
        //4096 x 2160 (DCI 4K)
        4096: {},
        //5120 x 2880 (5K iMac)
        5120: {},
        //3440 x 1440 (UltraWide QHD)
        3440: {},
        //3840 x 1600 (UltraWide 4K)
        1600: {},
        //5160 x 2160 (5K UltraWide)
        5160: {}
    }
};
