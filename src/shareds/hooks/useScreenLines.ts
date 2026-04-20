import { LowerLine } from 'src/shareds/SVG/backgroundLines/welcome/welcome-lower-line';
import { LowerLine } from 'src/shareds/SVG/backgroundLines/welcome/welcome-lower-line';
import { useMemo } from "react";
import { WelcomePageConfig } from "../Const/styles";

interface ScreenLineParams {
    screenWidth: number;
    screenHeight: number;
}

interface ScreenLineResult {
    lineWidth: number;
    blur: number;
}

/**
 * Кастомный хук для вычисления параметров линий (UpperLine / LowerLine)
 * через switch/case — выбирает конфиг в зависимости от разрешения экрана
 */
const useScreenLine = ({
    screenWidth,
    screenHeight
}: ScreenLineParams): ScreenLineResult => {
    const result = useMemo<ScreenLineResult>(() => {
        // Значения по умолчанию (например, для 1920x1080)
        let lineWidth = 1200;
        let blur = 80;

        switch (true) {
            // 🔹 1. LAPTOP
            case screenWidth <= 1366 && screenHeight <= 768:
                lineWidth = WelcomePageConfig.LAPTOP.;
                blur = WelcomePageConfig.LAPTOP.blur;
                break;

            // 🔹 2. FULL HD
            case screenWidth === 1920 && screenHeight === 1080:
                lineWidth = WelcomePageConfig.COMPUTER;
                blur = WelcomePageConfig.COMPUTER.blur;
                break;

            // 🔹 3. TABLET
            case screenWidth <= 1024 && screenHeight <= 768:
                lineWidth = WelcomePageConfig.TABLET.width;
                blur = WelcomePageConfig.TABLET.blur;
                break;

            // 🔹 4. MOBILE
            case screenWidth <= 768:
                lineWidth = WelcomePageConfig.MOBILE.width;
                blur = WelcomePageConfig.MOBILE.blur;
                break;

            // 🔹 5. DEFAULT (если ничего не подошло)
            default:
                break;
        }

        return { lineWidth, blur };
    }, [screenWidth, screenHeight]);

    return result;
};

export default useScreenLine;
