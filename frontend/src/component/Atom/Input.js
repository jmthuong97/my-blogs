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
const Input = styled.div`
    // gradient animation
    @keyframes gradient { 
        0%{background-position:0 0}
        100%{background-position:100% 0}
    }
    position: relative;
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
    border-radius: 2px;
    background: rgba(57, 63, 84, 0.8); // $input-background
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6) 0 0;
        background-size: 500% auto;
        animation: gradient 3s linear infinite;
    }
`;
const CustomInput = styled.input`
    flex-grow: 1;
    color: #BFD2FF; // $input-text-active
    font-size: 1.2rem;
    line-height: 2.4rem;
    vertical-align: middle;
    border-style: none; 
    background: transparent; 
    outline: none;
    padding: 8px 16px;
    &::-webkit-input-placeholder {
        color: #7881A1; // $input-text-inactive
    }
`;

export const Text = ({children, title, placeholder, onChange}) =>
    <Main>
        <Title>{title}</Title>
        <Input><CustomInput onChange={onChange} type="text" placeholder={placeholder}/></Input>
    </Main>;