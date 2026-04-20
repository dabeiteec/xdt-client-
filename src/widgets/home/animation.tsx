"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { white, paleGreen } from "src/shareds/Const/colors";
import CloudSvg from "src/shareds/SVG/homeAnimation/cloud-svg";
import EmptyTagSvg from "src/shareds/SVG/homeAnimation/empty-tag-svg";
import LeftGearWheelSvg from "src/shareds/SVG/homeAnimation/left-gear-wheel-svg";
import RightGearWheelSvg from "src/shareds/SVG/homeAnimation/right-geat-wheel-svg";
import LeftArrowSvg from "src/shareds/SVG/homeAnimation/left-arrow";
import CodeSvg from "src/shareds/SVG/homeAnimation/code-svg";
import LowerArrowSvg from "src/shareds/SVG/homeAnimation/lower-arrow";
import PagesSvg from "src/shareds/SVG/homeAnimation/pages-svg";
import PcSvg from "src/shareds/SVG/homeAnimation/pc-svg";
import PhoneSvg from "src/shareds/SVG/homeAnimation/phone-svg";
import PcSubstarateSvg from "src/shareds/SVG/homeAnimation/pc-substrate-svg";
import PhoneSubstrateSvg from "src/shareds/SVG/homeAnimation/phone-substare-svg";

const RightAnimation: React.FC = () => {
    const arrowControls = useAnimation();
    const lowerArrowControls = useAnimation();

    useEffect(() => {
        const animateArrows = async () => {
            // ЛЕВАЯ СТРЕЛКА - Фаза 1
            await arrowControls.start({
                opacity: 0,
                x: -60,
                transition: { delay: 0.2, ease: "easeOut", duration: 0.7 }
            });
            // ЛЕВАЯ СТРЕЛКА - Фаза 2
            arrowControls.set({ opacity: 0, x: 60 });
            await arrowControls.start({
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, ease: "easeIn", duration: 0.9 }
            });
            // ЛЕВАЯ СТРЕЛКА - Фаза 3
            arrowControls.start({
                x: [0, 6, 0],
                transition: {
                    ease: "easeIn",
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.5
                }
            });

            // НИЖНЯЯ СТРЕЛКА - ОБЪЕДИНЕННАЯ АНИМАЦИЯ 1-2 ФАЗ
            lowerArrowControls.start({
                opacity: [1, 0, 0, 1],
                y: [0, 40, -20, 0],
                transition: {
                    times: [0, 0.35, 0.35, 1],
                    duration: 1.6,
                    ease: ["easeOut", "linear", "easeIn"],
                    repeat: Infinity,
                    repeatDelay: 0.2
                }
            });
        };

        animateArrows();
    }, [arrowControls, lowerArrowControls]);

    return (
        <RightAnimationWrapper>
            <LeftAnimationContainer>
                <WheelContainer>
                    <AnimatedLeftGearWheel
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1.4
                        }}
                    />
                    <AnimatedRightGearWheel
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1.3
                        }}
                    />
                </WheelContainer>
                <StyledEmptyTag />
                <StyledPages />
                <LeftBurger>
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </LeftBurger>
            </LeftAnimationContainer>

            <PcContainer>
                <StyledPC />
                <StyledPcSubstrate />
            </PcContainer>

            <RightAnimationContainer>
                <CodeContainer>
                    <motion.div
                        style={{
                            position: "relative",
                            left: "15px"
                        }}
                        initial={{ opacity: 1, x: 0 }}
                        animate={arrowControls}
                    >
                        <LeftArrowSvg />
                    </motion.div>
                    <CodeSvg />
                    <BurgerMenu>
                        <Line />
                        <Line />
                        <Line />
                    </BurgerMenu>
                </CodeContainer>

                <CloudSection>
                    <Cloud>
                        <CloudSvg />
                    </Cloud>
                    <motion.div
                        style={{
                            position: "relative",
                            right: "65px",
                            bottom: "5px",
                            zIndex: 2
                        }}
                        initial={{ opacity: 1, y: 0 }}
                        animate={lowerArrowControls}
                    >
                        <LowerArrowSvg />
                    </motion.div>
                </CloudSection>

                <PhoneContainer>
                    <StyledPhone />
                    <StyledPhoneSubstrate />
                </PhoneContainer>
            </RightAnimationContainer>
        </RightAnimationWrapper>
    );
};

// Стили
const RightAnimationWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const LeftAnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 60px;
    left: 80px;
`;

const WheelContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    left: 30px;
    bottom: 30px;
    z-index: -1;
`;

const AnimatedLeftGearWheel = styled(motion.div).attrs(() => ({
    children: <LeftGearWheelSvg />
}))`
    position: relative;
    left: 26px;
    rotate: 30deg;
    transform-origin: center;
`;

const AnimatedRightGearWheel = styled(motion.div).attrs(() => ({
    children: <RightGearWheelSvg />
}))`
    position: relative;
    transform-origin: center;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledEmptyTag = styled(EmptyTagSvg)`
    position: relative;
    left: 20px;
    z-index: 1;
`;

const StyledPages = styled(PagesSvg)`
    z-index: 1;
`;

const PcContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledPC = styled(PcSvg)`
    z-index: 0;
`;

const StyledPcSubstrate = styled(PcSubstarateSvg)`
    position: relative;
    bottom: 20px;
    right: 37px;
    z-index: -1;
`;

const RightAnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 180px;
    bottom: 10px;
`;

const CodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    right: 100px;
`;

const CloudSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Cloud = styled.div`
    background-color: ${paleGreen};
    border-radius: 10px;
    width: 100px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 65px;
    top: 25px;
    z-index: 1;
`;

const PhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledPhone = styled(PhoneSvg)`
    position: relative;
    top: 40px;
    left: 10px;
    z-index: -1;
`;

const StyledPhoneSubstrate = styled(PhoneSubstrateSvg)`
    position: relative;
    top: 17px;
    left: 9px;
    z-index: -2;
`;

const Line = styled.div`
    width: 100px;
    height: 1px;
    border: 6px;
    border-color: ${white};
    border-radius: 8px;
`;

const LeftBurger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
`;

export default RightAnimation;
