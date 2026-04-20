"use client";

import React, { useState } from "react";
import { Title } from "src/shareds/Ui-Kit/title";
import styled from "styled-components";
import { currentWhite, white } from "src/shareds/Const/colors";
import ProjectUpperLine from "src/shareds/SVG/backgroundLines/project/project-upper-line";
import ProjectMiddleLine from "src/shareds/SVG/backgroundLines/project/project-middle-line";
import ProjectLowerLine from "src/shareds/SVG/backgroundLines/project/project-lower-line";
import TgQr from "src/shareds/SVG/QR-code/tg";

import GitHubQr from "src/shareds/SVG/QR-code/github";
import SteamQr from "src/shareds/SVG/QR-code/steam";
import Steam2Qr from "src/shareds/SVG/QR-code/steam2";
import DiscordQr from "src/shareds/SVG/QR-code/discord";

import TgChannelQR from "src/shareds/SVG/QR-code/tg-channel";
import Telegram from "src/shareds/SVG/global/telegram";
import GitHubSVG from "src/shareds/SVG/global/github";
import LinkedIn from "src/shareds/SVG/global/linked-in";
import SteamSvg from "src/shareds/SVG/global/steam";
import DiscordSvg from "src/shareds/SVG/global/discord";

const ProjectPage: React.FC = () => {
    const cardData = [
        {
            id: 1,
            name: "Tg",
            icon: Telegram,
            link: "https://t.me/dabeitex",
            Qr: TgQr
        },
        {
            id: 2,
            name: "TgChanel",
            icon: Telegram,
            link: "https://t.me/xdt_programming",
            Qr: TgChannelQR
        },
        {
            id: 3,
            name: "GitHub",
            icon: GitHubSVG,
            link: "https://github.com/xdt-git",
            Qr: GitHubQr
        },
        {
            id: 4,
            name: "LinkedIn",
            icon: LinkedIn,
            link: "https://github.com",
            Qr: TgChannelQR
        },
        {
            id: 5,
            name: "Steam  ",
            icon: SteamSvg,
            link: "https://steamcommunity.com/id/dabeiteec/",
            Qr: SteamQr
        },
        {
            id: 6,
            name: "Steam 2",
            icon: SteamSvg,
            link: "https://steamcommunity.com/id/Pididichka/",
            Qr: Steam2Qr
        },
        {
            id: 7,
            name: "Discord",
            icon: DiscordSvg,
            link: "https://discord.gg/bSaV6pMK",
            Qr: DiscordQr
        },
        {
            id: 8,
            name: "Instagramm",
            icon: SteamSvg,
            link: "https://github.com",
            Qr: TgChannelQR
        }
    ];

    return (
        <PageContainer>
            {/* Фоновые линии */}
            <BackgroundLines>
                <UpperLineContainer>
                    <ProjectUpperLine />
                </UpperLineContainer>

                <MiddleLineContainer>
                    <ProjectMiddleLine />
                </MiddleLineContainer>

                <LowerLineContainer>
                    <ProjectLowerLine />
                </LowerLineContainer>
            </BackgroundLines>
            {/* Фоновые линии */}
            <ContentContainer>
                <TitleWrapper>
                    <Title text='Contact' />
                </TitleWrapper>

                <CardContainer>
                    {cardData.map(card => (
                        <Card key={card.id} href={card.link} target='_blank'>
                            <CardHeader>
                                <IconWrapper>
                                    <card.icon />
                                </IconWrapper>
                                <CardName>{card.name}</CardName>
                            </CardHeader>

                            <QRWrapper>
                                <card.Qr />
                            </QRWrapper>
                        </Card>
                    ))}
                </CardContainer>
            </ContentContainer>
        </PageContainer>
    );
};

/* ---------- СТИЛИ ---------- */
const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 40px 40px 0px 40px;
    background: #0a0a0a;
    color: ${currentWhite};
    overflow-x: hidden;
`;

const BackgroundLines = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    pointer-events: none;
`;

const UpperLineContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    z-index: -1;
    pointer-events: none;
`;

// Средняя линия - по центру экрана, диагональ
const MiddleLineContainer = styled.div`
    position: fixed;
    bottom: -5px;
    right: 0;
    width: auto;
    z-index: -1;
    pointer-events: none;
`;

const LowerLineContainer = styled.div`
    position: fixed;
    bottom: -5px;
    right: 0;
    width: auto;
    z-index: -1;
    pointer-events: none;
`;

const ContentContainer = styled.div`
    position: relative;
    z-index: 20;
    margin-top: 50px;
    width: 100%;
    max-width: 1500px;
    min-height: 100vh;
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;
    margin-top: 20px;

    /* Убираем padding и добавляем автоматические отступы */
    & > * {
        flex: 0 0 auto;
    }
`;

const Card = styled.a`
    color: ${currentWhite};
    width: 300px;
    height: 350px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:hover {
        transform: translateY(-5px);
        border-color: #00ff00;
        box-shadow: 0 8px 32px rgb(208, 255, 0);
        background: rgba(255, 255, 255, 0.1);
    }
`;
const CardHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: start;
    gap: 15px;
`;
const CardName = styled.h3`
    font-size: 32px;
    line-height: 21px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${white};
    margin: 0;
`;

const IconWrapper = styled.div`
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }

    ${Card}:hover & svg {
        transform: scale(1.1);
        filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.5));
    }
`;

const QRWrapper = styled.div`
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }

    ${Card}:hover svg {
        filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.5));
    }
`;

export default ProjectPage;
