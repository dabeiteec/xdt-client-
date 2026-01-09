import { useEffect, useState } from "react";

interface ScreenParams {
    screenWidth: number;
    screenHeight: number;
}

const useScreenParams = (): ScreenParams => {
    const [screen, setScreen] = useState<ScreenParams>({
        screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
        screenHeight: typeof window !== "undefined" ? window.innerHeight : 0
    });

    useEffect(() => {
        const handleResize = () => {
            setScreen({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // сразу вызвать, чтобы задать актуальные значения

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screen;
};

export default useScreenParams;
