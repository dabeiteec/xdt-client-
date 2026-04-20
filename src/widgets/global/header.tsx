"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { white, green } from "src/shareds/Const/colors";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const headerTitles = [
        { title: "Home", path: "/home" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" }
    ];

    // Определяем активную вкладку на основе текущего пути
    const getActiveTab = () => {
        const currentPath = headerTitles.find(item =>
            pathname.startsWith(item.path)
        );
        return currentPath?.title || "Home";
    };

    const [activeTab, setActiveTab] = useState(getActiveTab());

    // Обновляем активную вкладку при изменении пути
    useEffect(() => {
        setActiveTab(getActiveTab());
    }, [pathname]);

    const activeIndex = headerTitles.findIndex(
        item => item.title === activeTab
    );

    const handleNavigation = (title: string, path: string) => {
        router.push(path);
        setActiveTab(title);
    };

    return (
        <StyledHeader>
            <LineContainer>
                {/* Линия справа-налево */}
                <ActiveLine
                    $activeIndex={activeIndex}
                    $totalItems={headerTitles.length}
                />

                {headerTitles.map((item, index) => (
                    <StyledNav
                        key={item.title}
                        $isActive={activeTab === item.title}
                        onClick={() => handleNavigation(item.title, item.path)}
                        $itemIndex={index}
                        $totalItems={headerTitles.length}
                    >
                        {item.title}
                    </StyledNav>
                ))}
            </LineContainer>
        </StyledHeader>
    );
};

// Стили остаются без изменений
const StyledHeader = styled.header`
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
`;

const LineContainer = styled.div`
    display: flex;
    gap: 5vw;
    position: relative;
`;

const StyledNav = styled.nav<{
    $isActive: boolean;
    $itemIndex: number;
    $totalItems: number;
}>`
    background-color: transparent;
    color: ${({ $isActive }) => ($isActive ? green : white)};
    cursor: pointer;
    font-size: 20px;
    padding: 10px 0;
    transition: color 0.3s ease;
    position: relative;
    z-index: 2;
    flex: 1;
    text-align: center;
    margin-right: 70px;
    &:hover {
        color: ${white};
    }
`;

const ActiveLine = styled.div<{
    $activeIndex: number;
    $totalItems: number;
}>`
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${green};
    transition: all 0.3s ease;
    z-index: 1;
    right: 0;

    width: ${({ $activeIndex, $totalItems }) =>
        `${100 - ($activeIndex / $totalItems) * 100}%`};

    background: linear-gradient(
        to right,
        transparent 0%,
        ${green} 80%,
        ${green} 20%,
        transparent 100%
    );
`;

export default Header;
