import React from "react";

import { NextPageButton, LinkButton } from "src/shareds/Ui-Kit/buttons";
import GitHubSvg from "src/shareds/SVG/code";
import { Title } from "src/shareds/Ui-Kit/title";
import styled from "styled-components";

const WelcomePage: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <NextPageButton label='dabeiteec.com' />
            <LinkButton>
                <GitHubSvg width={75} height={75} />
            </LinkButton>
            <Title text='Welcome' isGradient={true} />
        </div>
    );
};

const MainContainer = styled.main``;

export default WelcomePage;
