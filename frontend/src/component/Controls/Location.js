import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;
const Title = styled.div`
    width: 30%;
`;
const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
`;

export default () => {
    return <Main>
        <Title/>
        <Content>

        </Content>
    </Main>
}