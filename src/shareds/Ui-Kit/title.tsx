"use client";
import React from "react";
import styled from "styled-components";
import { white, yellow, green } from "../Const/colors";

interface TitleProps {
    text: string;
    isGradient?: boolean;
}

export const Title: React.FC<TitleProps> = ({ text, isGradient }) => {
    return <CustomTitle $isGradient={isGradient}>{text}</CustomTitle>;
};

const CustomTitle = styled.h1<{ $isGradient?: boolean }>`
    font-size: 96px;
    font-weight: 700;
    color: ${({ $isGradient }) => ($isGradient ? `transparent` : `${white}`)};

    ${({ $isGradient }) =>
        $isGradient &&
        `
        background: linear-gradient(to right, ${green}, ${yellow});
        background-size: 100% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        
        &::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 30%;
            background: ${green};
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            overflow: hidden;
            white-space: nowrap;
        }
        
        &::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 30%;
            width: 70%;
            background: ${yellow};
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            overflow: hidden;
            white-space: nowrap;
        }
    `}
`;
