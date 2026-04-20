"use client";

import React from "react";
import styled from "styled-components";
import { motion, easeOut } from "framer-motion";
import { NextPageButton, LinkButton } from "src/shareds/Ui-Kit/buttons";
import CodeSVG from "src/shareds/SVG/global/code";
import { Title } from "src/shareds/Ui-Kit/title";
import UpperLine from "src/shareds/SVG/backgroundLines/welcome/welcome-upper-line";
import LowerLine from "src/shareds/SVG/backgroundLines/welcome/welcome-lower-line";
import UserSVG from "src/shareds/SVG/user";
import GitHubSVG from "src/shareds/SVG/global/github";
import useScreenParams from "src/shareds/hooks/useScreenParams";
import { useRouter } from "next/navigation"; // ДОБАВЬТЕ ЭТОТ ИМПОРТ!

const WelcomePage: React.FC = () => {
    const router = useRouter(); // ДОБАВЬТЕ ЭТОТ ХУК

    const title = ["Welcome", "to", "my"];
    const gradientTitle = ["Portfolio", "Website"];

    const links = [
        {
            icon: <GitHubSVG width={75} height={75} />,
            href: "https://github.com" // Внешняя ссылка - оставляем как есть
        },
        {
            icon: <UserSVG width={75} height={75} />,
            onClick: () => router.push("/home") // НАВИГАЦИЯ НА /home
        },
        {
            icon: <CodeSVG width={75} height={75} />,
            onClick: () => router.push("/projects") // НАВИГАЦИЯ НА /projects
        }
    ];

    const { screenWidth, screenHeight } = useScreenParams();

    const handleButtonClick = () => {
        router.push("/home"); // НАВИГАЦИЯ НА /home при клике на кнопку
    };

    console.log("Is it PARAMS", screenWidth, screenHeight);

    return (
        <MainContainer>
            <StyledUpperLine />

            <MainContent
                as={motion.div}
                initial='hidden'
                animate='visible'
                variants={pageSequence}
            >
                {/* === 1. Линки (поочерёдно сверху вниз) === */}
                <LinksRow as={motion.div} variants={linksContainer}>
                    {links.map((link, idx) => (
                        <motion.div key={idx} variants={fadedLink}>
                            <LinkButton
                                onClick={
                                    link.onClick ||
                                    (() => window.open(link.href, "_blank"))
                                }
                            >
                                {link.icon}
                            </LinkButton>
                        </motion.div>
                    ))}
                </LinksRow>

                {/* === 2. Welcome to my (в строку, поочерёдно слева направо) === */}
                <TextContainer>
                    <TitleRow as={motion.div} variants={textContainer}>
                        {title.map((word, idx) => (
                            <motion.div key={idx} variants={fadeFromLeft}>
                                <StyledTitle text={word} isGradient={false} />
                            </motion.div>
                        ))}
                    </TitleRow>

                    {/* === 3. Portfolio + Website (поочерёдно снизу вверх) === */}
                    <TitleRow as={motion.div} variants={portfolioContainer}>
                        <motion.div variants={fadeFromBottom}>
                            <Title text={gradientTitle[0]} isGradient />
                        </motion.div>
                        <motion.div variants={fadeFromBottomDelayed}>
                            <Title text={gradientTitle[1]} isGradient />
                        </motion.div>
                    </TitleRow>
                </TextContainer>

                {/* === 4. Кнопка (появляется последней, как есть) === */}
                <motion.div variants={fadeInButton}>
                    <NextPageButton
                        label='dabeiteec.com'
                        onClick={handleButtonClick} // ДОБАВЬТЕ ОБРАБОТЧИК
                    />
                </motion.div>
            </MainContent>

            <StyledLowerLine />
        </MainContainer>
    );
};

/* ---------- АНИМАЦИИ ---------- */

// Главная последовательность: управляет порядком появления блоков
const pageSequence = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3 // между блоками
        }
    }
};

// Линки: сверху вниз
const linksContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

// Welcome to my: слева направо
const textContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25, delayChildren: 0.1 }
    }
};

// Portfolio / Website: снизу вверх
const portfolioContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
};

// Анимации движений
const fadedLink = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const fadeFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easeOut } }
};

const fadeFromBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.45, ease: easeOut }
    }
};

const fadeFromBottomDelayed = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeOut, delay: 0.75 }
    }
};
//нижняя кнопка
const fadeInButton = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: easeOut, delay: 0.8 }
    }
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

const MainContent = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* --- Адаптив для ноутбуков 1366x780 --- */
    @media screen and (max-width: 1366px) and (max-height: 780px) {
        margin-top: 130px;
        scale: 0.9;
    }

    @media screen and (max-width: 1280px) {
        margin-top: 150px;
        scale: 0.85;
    }
`;

const StyledUpperLine = styled(UpperLine)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(1.15);
    transform-origin: center;
    width: 120vw;
    height: auto;
`;

const StyledLowerLine = styled(LowerLine)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const StyledTitle = styled(Title)`
    margin: 0;
    display: inline-block;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @media screen and (max-width: 1366px) and (max-height: 780px) {
        margin-bottom: 30px;
    }
`;

const LinksRow = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 30px;

    @media screen and (max-width: 1366px) {
        gap: 25px;
        margin-bottom: 20px;
    }
`;

const TitleRow = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    @media screen and (max-width: 1366px) {
        gap: 8px;
        margin-bottom: 15px;
    }
`;

export default WelcomePage;
