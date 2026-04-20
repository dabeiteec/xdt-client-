"use client";

import React, { useState } from "react";
import { Title } from "src/shareds/Ui-Kit/title";
import styled from "styled-components";
import { currentWhite } from "src/shareds/Const/colors";
import ProjectUpperLine from "src/shareds/SVG/backgroundLines/project/project-upper-line";
import ProjectMiddleLine from "src/shareds/SVG/backgroundLines/project/project-middle-line";
import ProjectLowerLine from "src/shareds/SVG/backgroundLines/project/project-lower-line";
import HtmlIcon from "src/shareds/SVG/skills/html-icon";
// Импорты SVG иконок
import CssIcon from "src/shareds/SVG/skills/css-icon";
import JsIcon from "src/shareds/SVG/skills/js-icon";
import ScssIcon from "src/shareds/SVG/skills/scss-icon";
import StyledComponentsIcon from "src/shareds/SVG/skills/styled-components-icon";
import BootstrapIcon from "src/shareds/SVG/skills/bootstrap-icon";
import TailwindIcon from "src/shareds/SVG/skills/tailwind-icon";
import TsIcon from "src/shareds/SVG/skills/ts-icon";
import ReactIcon from "src/shareds/SVG/skills/react-icon";
import ReactNativeIcon from "src/shareds/SVG/skills/react-native-icon";
import ElectronIcon from "src/shareds/SVG/skills/electron-icon";
import NextJsIcon from "src/shareds/SVG/skills/next-js-icon";
import GitIcon from "src/shareds/SVG/skills/git-icon";
import NodeIcon from "src/shareds/SVG/skills/node-icon";
import ExpressJsIcon from "src/shareds/SVG/skills/express-js-icon";
import NestIcon from "src/shareds/SVG/skills/nest-icon";
import DockerIcon from "src/shareds/SVG/skills/docker-icon";
import FigmaIcon from "src/shareds/SVG/skills/figma-icon";
import ViteIcon from "src/shareds/SVG/skills/vite-icon";
import WebpackIcon from "src/shareds/SVG/skills/webpack-icon";

const tabs = ["project", "skills"];

const mockSkills = [
    // Базовые технологии
    { id: 1, name: "HTML5", icon: HtmlIcon },
    { id: 2, name: "CSS3", icon: CssIcon },
    { id: 3, name: "JavaScript", icon: JsIcon },
    //Языки
    { id: 4, name: "TypeScript", icon: TsIcon },
    //Стили
    { id: 5, name: "SCSS/SASS", icon: ScssIcon },
    { id: 6, name: "Styled Components", icon: StyledComponentsIcon },
    { id: 7, name: "Bootstrap", icon: BootstrapIcon },
    { id: 8, name: "Tailwind CSS", icon: TailwindIcon },
    //Фронтенд
    { id: 9, name: "React", icon: ReactIcon },
    { id: 10, name: "React Native", icon: ReactNativeIcon },
    { id: 11, name: "Electron", icon: ElectronIcon },
    { id: 12, name: "Next.js", icon: NextJsIcon },
    //Сборщики
    { id: 13, name: "Vite", icon: ViteIcon },
    { id: 14, name: "Webpack", icon: WebpackIcon },
    // Бэкенд
    { id: 15, name: "Node.js", icon: NodeIcon },
    { id: 16, name: "Express", icon: ExpressJsIcon },
    { id: 17, name: "NestJS", icon: NestIcon },
    // Инструменты
    { id: 18, name: "Git", icon: GitIcon },
    { id: 19, name: "Docker", icon: DockerIcon },
    { id: 20, name: "Figma", icon: FigmaIcon }
];

const ProjectPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"projects" | "skills">(
        "projects"
    );

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

            {/* Верхняя плашка с табами */}
            <TabsContainer>
                <Tab
                    $active={activeTab === tabs[0]}
                    onClick={() => setActiveTab("projects")}
                >
                    {tabs[0]}
                </Tab>
                <Tab
                    $active={activeTab === tabs[1]}
                    onClick={() => setActiveTab("skills")}
                >
                    {tabs[1]}
                </Tab>
            </TabsContainer>

            {/* Контент в зависимости от активного таба */}
            <ContentContainer>
                {activeTab === "projects" ? (
                    <Reversion>
                        <Title text='The page is under revision.' isGradient />
                    </Reversion>
                ) : (
                    <SkillsGrid>
                        {mockSkills.map(skill => (
                            <SkillCard key={skill.id}>
                                <SkillIcon>
                                    {React.createElement(skill.icon, {
                                        width: "48px",
                                        height: "48px"
                                    })}
                                </SkillIcon>
                                <SkillName>{skill.name}</SkillName>
                                <SkillCategory>
                                    {getSkillCategory(skill.name)}
                                </SkillCategory>
                            </SkillCard>
                        ))}
                    </SkillsGrid>
                )}
            </ContentContainer>
        </PageContainer>
    );
};

// Функция для определения категории навыка
const getSkillCategory = (skillName: string): string => {
    if (["HTML5", "CSS3", "JavaScrip"].includes(skillName)) {
        return "База";
    }
    if (
        [
            "CSS3",
            "SCSS/SASS",
            "Styled Components",
            "Bootstrap",
            "Tailwind CSS"
        ].includes(skillName)
    ) {
        return "Стилизация";
    }
    if (["JavaScript", "TypeScript"].includes(skillName)) {
        return "Языки";
    }
    if (["React", "React Native", "Electron", "Next.js"].includes(skillName)) {
        return "Frontend";
    }
    if (["Node.js", "Express", "NestJS"].includes(skillName)) {
        return "Backend";
    }
    if (["Git", "Docker", "Figma"].includes(skillName)) {
        return "Инструменты";
    }
    if (["Vite", "Webpack"].includes(skillName)) {
        return "Сборшики";
    }
    return "Другое";
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

// Контейнер для всех фоновых линий
const BackgroundLines = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    pointer-events: none;
`;

// Верхняя линия - от левого верхнего угла, тянется вправо и вниз
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

// Нижняя линия - от правого нижнего угла, тянется влево и вверх
const LowerLineContainer = styled.div`
    position: fixed;
    bottom: -5px;
    right: 0;
    width: auto;
    z-index: -1;
    pointer-events: none;
`;

const Reversion = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    position: relative;
    z-index: 20;
    margin-top: 30px;
    width: 100%;
    min-height: 100vh;
`;

const TabsContainer = styled.div`
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: space-evenly;
    gap: -30px;
    margin-top: 40px;
    padding-top: 10px;
`;

const Tab = styled.button<{ $active: boolean }>`
    width: 365px;
    font-size: 46px;
    border: none;
    border-radius: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    color: ${({ $active }) => ($active ? "#00ff00" : currentWhite)};
    cursor: pointer;
    padding: 10px 20px;
    transition: color 0.3s ease;
    z-index: 20;

    &:hover {
        color: #00ff00;
    }
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 20;
`;

const ProjectCard = styled.div`
    background: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 255, 0, 0.1);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProjectContent = styled.div`
    padding: 20px;
`;

const ProjectTitle = styled.h3`
    font-size: 22px;
    margin-bottom: 10px;
    color: #00ff00;
`;

const ProjectDescription = styled.p`
    color: #ccc;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
`;

const TechTag = styled.span`
    background: rgba(0, 255, 0, 0.1);
    color: #00ff00;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
`;

const ProjectLink = styled.a`
    display: inline-block;
    color: ${currentWhite};
    background: #00ff00;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
        background: #00cc00;
    }
`;

const SkillsGrid = styled.div`
    position: relative;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 25px;
    padding: 20px;
`;

const SkillCard = styled.div`
    background: #1a1a1a;
    border-radius: 12px;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 255, 0, 0.1);
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 14px;
        border: 2px solid transparent;
        background: linear-gradient(90deg, #ffeb3b, #4caf50) border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: scale(1.05);
        background: #222;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);

        &::after {
            opacity: 1;
            animation: moveLine 2s linear infinite;
        }
    }

    @keyframes moveLine {
        to {
            filter: hue-rotate(360deg);
        }
    }
`;

const SkillIcon = styled.div`
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }
`;

const SkillName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #00ff00;
    margin-bottom: 5px;
    text-align: center;
`;

const SkillCategory = styled.div`
    font-size: 12px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
`;

export default ProjectPage;
