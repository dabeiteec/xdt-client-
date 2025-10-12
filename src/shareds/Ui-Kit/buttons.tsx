"use client";

import React from "react";
import styled from "styled-components";
import { WelcomePageConfig } from "../Const/styles";
import {
    yellowGradient,
    yellow,
    white,
    greenGradient,
    green
} from "../Const/colors";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button";
    disabled?: boolean;
}
interface LinkButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button";
    disabled?: boolean;
}
const OuterGlow = styled.div<{ $isLink?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;

    box-shadow:
        -3px 0 7px ${yellowGradient},
        3px 0 7px ${greenGradient},
        0 -3px 7px ${greenGradient},
        0 3px 7px ${yellowGradient};
    filter: blur(2px);
    border-radius: ${({ $isLink }) =>
        $isLink
            ? `${WelcomePageConfig.COMPUTER[1920]?.linkButtonCorner || 100}px`
            : `${WelcomePageConfig.COMPUTER[1920]?.continueButtonCorner || 12}px`};
    z-index: 1;
`;

const InnerGlow = styled.div<{ $isLink?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${({ $isLink }) =>
        $isLink
            ? `${WelcomePageConfig.COMPUTER[1920]?.linkButtonCorner || 100}px`
            : `${WelcomePageConfig.COMPUTER[1920]?.continueButtonCorner || 12}px`};
    box-shadow:
        inset -3px 0 7px ${greenGradient},
        inset 3px 0 7px ${yellowGradient},
        inset 0 -3px 7px ${yellowGradient},
        inset 0 3px 7px ${greenGradient};
    filter: blur(1px);
    background: transparent;
    z-index: -1;
    pointer-events: none;
    transition: all 0.3s ease;
`;

const ButtonContainer = styled.div<{ $isLink?: boolean }>`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: ${({ $isLink }) =>
        $isLink
            ? `${WelcomePageConfig.COMPUTER[1920]?.linkButtonSize || 75}px`
            : `${WelcomePageConfig.COMPUTER[1920]?.continueButtonWidth || 400}px`};
    height: ${({ $isLink }) =>
        $isLink
            ? `${WelcomePageConfig.COMPUTER[1920]?.linkButtonSize || 75}px`
            : `${WelcomePageConfig.COMPUTER[1920]?.continueButtonHeight || 80}px`};

    &:hover ${OuterGlow} {
        box-shadow:
            -3px 0 8px ${yellowGradient},
            3px 0 8px ${greenGradient},
            0 -3px 8px ${greenGradient},
            0 3px 8px ${yellowGradient};
        filter: blur(2px);
    }

    &:hover ${InnerGlow} {
        box-shadow:
            inset -3px 0 8px ${greenGradient},
            inset 3px 0 8px ${yellowGradient},
            inset 0 -3px 8px ${yellowGradient},
            inset 0 3px 8px ${greenGradient};
        filter: blur(1px);
    }
`;

const StyledButton = styled.button<{ $isLink?: boolean }>`
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    color: ${white};
    cursor: pointer;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    font-size: ${WelcomePageConfig.COMPUTER[1920]?.continueButtonTextSize ||
    40}px;
    font-weight: ${WelcomePageConfig.COMPUTER[1920]?.continueButtonTextWeight ||
    400};
    border-radius: ${({ $isLink }) =>
        $isLink
            ? `${WelcomePageConfig.COMPUTER[1920]?.linkButtonCorner || 100}px`
            : `${WelcomePageConfig.COMPUTER[1920]?.continueButtonCorner || 12}px`};
    @media (max-width: 1533px) {
        border-radius: ${WelcomePageConfig.LAPTOP[1536]?.continueButtonCorner ||
        11}px;
        font-size: ${WelcomePageConfig.LAPTOP[1536]?.continueButtonTextSize ||
        38}px;
    }

    @media (max-width: 1363px) {
        border-radius: ${WelcomePageConfig.LAPTOP[1366]?.continueButtonCorner ||
        10}px;
        font-size: ${WelcomePageConfig.LAPTOP[1366]?.continueButtonTextSize ||
        36}px;
    }

    @media (max-width: 1280px) {
        border-radius: ${WelcomePageConfig.LAPTOP[1280]?.continueButtonCorner ||
        9}px;
        font-size: ${WelcomePageConfig.LAPTOP[1280]?.continueButtonTextSize ||
        34}px;
    }

    @media (max-width: 768px) {
        border-radius: ${WelcomePageConfig.TABLET[768]?.continueButtonCorner ||
        8}px;
        font-size: ${WelcomePageConfig.TABLET[768]?.continueButtonTextSize ||
        30}px;
    }

    @media (max-width: 480px) {
        border-radius: ${WelcomePageConfig.MOBILE[428]?.continueButtonCorner ||
        7}px;
        font-size: ${WelcomePageConfig.MOBILE[428]?.continueButtonTextSize ||
        28}px;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const ButtonText = styled.span`
    position: relative;
    z-index: 3;
    text-shadow: 0 0 10px rgb(255, 255, 255);
`;

export const NextPageButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false
}) => {
    return (
        <ButtonContainer>
            <OuterGlow />
            <StyledButton type={type} onClick={onClick} disabled={disabled}>
                <InnerGlow />
                <ButtonText>{label}</ButtonText>
            </StyledButton>
        </ButtonContainer>
    );
};

export const LinkButton: React.FC<LinkButtonProps> = ({
    children,
    onClick,
    type = "button",
    disabled = false
}) => {
    return (
        <ButtonContainer $isLink={true}>
            <OuterGlow $isLink={true} />
            <StyledButton
                type={type}
                onClick={onClick}
                disabled={disabled}
                $isLink={true}
            >
                <InnerGlow $isLink={true} />
                {children}
            </StyledButton>
        </ButtonContainer>
    );
};
