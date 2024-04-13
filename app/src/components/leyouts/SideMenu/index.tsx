import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledLayoutsWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const StyledSideMenu = styled.div`
    background-color: #EADBC8;
    padding: 15px 10px;
    width: 20%;
    height: 100vh;
`

const StyledMainContents = styled.div`
    background-color: #FEFAF6;
    padding: 25px;
    width: 80%;
    height: 100vh;
`

type Props = {
    children: ReactNode;
}

const Index = ({ children }: Props) => {
    return (
        <StyledLayoutsWrap>
            <StyledSideMenu>
                sidemenu
            </StyledSideMenu>
            <StyledMainContents>
                {children}
            </StyledMainContents>
        </StyledLayoutsWrap>
    );
}
export default Index;