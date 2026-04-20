"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { Title } from "src/shareds/Ui-Kit/title";
import { LinkButton } from "src/shareds/Ui-Kit/buttons";
import GitHubSVG from "src/shareds/SVG/global/github";
import LinkedIn from "src/shareds/SVG/global/linked-in";
import Telegram from "src/shareds/SVG/global/telegram";
import { greenOpasity, white } from "src/shareds/Const/colors";
import LeftLine from "src/shareds/SVG/backgroundLines/home/home-left-line";
import RightLine from "src/shareds/SVG/backgroundLines/home/home-right-line";

// Импортируем новые компоненты
import ArrowAnimation from "src/widgets/home/left-button-container";
import RightAnimation from "src/widgets/home/animation";

const HomePage: React.FC = () => {
    const titleText = ["Frontend", "develober"];
    const subtitle = [
        "Создаю интерфейсы, которые работают просто и выглядят стильно."
    ];
    const buttonText = ["TypeSctipt", "React", "NextJs", "Python"];
    const links = [
        {
            icon: <GitHubSVG width={75} height={75} />,
            href: "https://github.com/dabeiteec"
        },
        {
            icon: <LinkedIn width={75} height={75} />,
            href: "https://example.com/user"
        },
        {
            icon: <Telegram width={75} height={75} />,
            href: "https://t.me/xdt_programming"
        }
    ];

    return (
        <MainContainer>
            <StyledLeftLine />
            <MainContent>
                <LeftContainer>
                    <TitleContainer>
                        <Title text={titleText[0]} isGradient />
                        <Subtitle>{titleText[1]}</Subtitle>
                    </TitleContainer>
                    <MainText>{subtitle}</MainText>
                    <ButtonContainer>
                        <CustomButton $offsetY={-60}>
                            {buttonText[0]}
                        </CustomButton>
                        <ForArrowContainer>
                            <ArrowAnimation />
                            <CustomButton $offsetY={20}>
                                {buttonText[1]}
                            </CustomButton>
                        </ForArrowContainer>
                        <CustomButton $offsetY={70}>
                            {buttonText[2]}
                        </CustomButton>
                        <CustomButton>{buttonText[3]}</CustomButton>
                    </ButtonContainer>
                </LeftContainer>

                <RightContainer>
                    <RightAnimation />
                </RightContainer>
            </MainContent>
            <StyledRightLine />
            <Footer>
                <LinkButton onClick={() => {}}>{links[0].icon}</LinkButton>
                <LinkButton onClick={() => {}}>{links[1].icon}</LinkButton>
                <LinkButton onClick={() => {}}>{links[2].icon}</LinkButton>
            </Footer>
        </MainContainer>
    );
};

/* ---------- СТИЛИ ---------- */
const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const StyledLeftLine = styled(LeftLine)`
    height: 100vh;
    width: auto;
    left: 0;
    top: 0;
    position: fixed;
    z-index: -1;
    pointer-events: none;
`;

const StyledRightLine = styled(RightLine)`
    width: auto;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: -1;
    pointer-events: none;
`;

const ForArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MainContent = styled.div`
    display: flex;
    width: 100%;
`;

const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleContainer = styled.div`
    width: 100%;
    margin-left: 100px;
    margin-bottom: 30px;
`;

const Subtitle = styled.div`
    font-size: 64px;
`;

const MainText = styled.div`
    font-size: 40px;
    width: 860px;
    height: 100px;
    margin-left: 100px;
`;

const ButtonContainer = styled.div`
    margin-top: 130px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 130%;
    margin-left: 40px;
    position: relative;
    height: 200px;
`;

const CustomButton = styled.button<{ $offsetY?: number }>`
    background-color: ${greenOpasity};
    border-radius: 10px;
    border: none;
    color: ${white};
    font-size: 32px;
    width: 230px;
    height: 80px;
    position: relative;
    top: ${({ $offsetY }) => $offsetY || 0}px;
    z-index: 2;
`;

const RightContainer = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 15%;
    top: 0;
    left: 0;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
`;

export default HomePage;
