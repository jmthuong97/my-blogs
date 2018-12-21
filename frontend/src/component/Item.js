import React from 'react';
import styled from 'styled-components';

import BoxContent from './Atom/BoxContent';
import BoxDeco from './Atom/BoxDeco';
import BoxImg from './Atom/BoxImg';
import BoxShadow from './Atom/BoxShadow';
import {BoxText, BoxTextInner} from './Atom/BoxText';
import {BoxTitle, BoxTitleInner} from './Atom/BoxTitle';

const Box = styled.div`
    position: relative;
	margin: 2rem;
	@media screen and (min-width: 55em) {
	    margin: 4rem;
	}
	@media screen and (min-width: 80em) {
	    margin: 6rem 4.5rem;
	}
`;

export default ({setRef, dataItem}) => {
    return (
        <Box>
            <BoxShadow setRef={setRef}/>
            <BoxImg src={dataItem["picture"]["thumbnail"]} setRef={setRef}/>
            {dataItem.title && dataItem.title["data"] &&
            <BoxTitle setRef={setRef} location={dataItem.title["location"]} straight={dataItem.title["straight"]}>
                <BoxTitleInner>{dataItem.title["data"]}</BoxTitleInner>
            </BoxTitle>}
            {dataItem.text && dataItem.text["data"] &&
            <BoxText setRef={setRef} location={dataItem.text["location"]}>
                <BoxTextInner reverse={dataItem.text["reverse"]}
                              rotated={dataItem.text["rotated"]}>{dataItem.text["data"]}</BoxTextInner>
            </BoxText>}
            {dataItem.icon && dataItem.icon["data"] &&
            <BoxDeco setRef={setRef}
                     location={dataItem.icon["location"]}>{dataItem.icon["data"]}</BoxDeco>}
            {dataItem.description &&
            <BoxContent setRef={setRef}>{dataItem["description"]}</BoxContent>}
        </Box>
    );
}