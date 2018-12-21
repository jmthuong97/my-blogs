import React from 'react';
import styled from 'styled-components';

const HeaderHeader = styled.header`
    position: relative;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 2rem;
	margin-bottom: 5rem;
	@media screen and (max-width: 55em) {
		padding-bottom: 5rem;
	}
`;
const Link = styled.a`
    display: block;
    float: right;
	margin: 0 10px 0 auto;
	color: #000;
	text-decoration: none;
	@media screen and (max-width: 55em) {
	    display: block;
		margin: 1em auto;
	}
`;
const Brand = styled.h1`
    width: 50%;
    font-size: 1em;
	font-weight: bold;
	margin: 0;
	padding: 0;
`;
const Logo = styled.div`
    width: 50%;
    float: right;
`;


export default () => {
    return <HeaderHeader>
        <Brand><i className="fas fa-camera-retro fa-lg"/> My Blogs</Brand>
        <Logo>
            <Link href="https://github.com/jmthuong97/my-blogs"
                  target="_blank"
                  title="Find this project on GitHub">
                <i className="fab fa-github fa-lg"/>
            </Link>
            <Link href="https://www.facebook.com/jmthuong97"
                  target="_blank"
                  title="Find this project on GitHub">
                <i className="fab fa-facebook fa-lg"/>
            </Link>
        </Logo>
    </HeaderHeader>;
}