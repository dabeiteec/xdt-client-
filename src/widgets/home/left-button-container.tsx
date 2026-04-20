"use client";

import React from "react";
import styled from "styled-components";
import FirstArrow from "src/shareds/SVG/homeSvg/arrows/firstArrow";
import SecondArrow from "src/shareds/SVG/homeSvg/arrows/secondArrow";
import ThridArrow from "src/shareds/SVG/homeSvg/arrows/thridArrow";

interface ArrowAnimationProps {
    className?: string;
}

const ArrowAnimation: React.FC<ArrowAnimationProps> = ({ className }) => {
    return (
        <ArrowContainer className={className}>
            <ArrowWrapper $top={-170} $left={-210}>
                <FirstArrow />
            </ArrowWrapper>
            <ArrowWrapper $top={-170} $left={-170}>
                <SecondArrow />
            </ArrowWrapper>
            <ArrowWrapper $top={-100} $left={-540}>
                <ThridArrow />
            </ArrowWrapper>
        </ArrowContainer>
    );
};

// Стили
const ArrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: 1;
`;

const ArrowWrapper = styled.div<{ $top?: number; $left?: number }>`
    position: relative;
    top: ${({ $top }) => $top || 0}px;
    left: ${({ $left }) => $left || 0}px;
`;

export default ArrowAnimation;
