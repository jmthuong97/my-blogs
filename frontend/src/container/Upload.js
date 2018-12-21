import React, {Component} from 'react';
import Header from '../component/Header';
import GridItem from '../component/GridItem';
import * as Input from '../component/Atom/Input';
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    overflow: hidden;
`;
const Review = styled.div`
    float: right;
    width: 40%;
    height: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: yellow;
`;
const Control = styled.div`
    width: 60%;
    height: 100%;
    background-color: aquamarine;
`;

class Upload extends Component {
    state = {
        dataItem: {
            "picture": {
                "url": "https://firebasestorage.googleapis.com/v0/b/test-acf65.appspot.com/o/grid-layout-motion%2F4.jpg?alt=media&token=7f9b69c3-a646-40f8-a8ed-33861ac617e1",
                "thumbnail": "https://firebasestorage.googleapis.com/v0/b/test-acf65.appspot.com/o/grid-layout-motion%2F4.jpg?alt=media&token=7f9b69c3-a646-40f8-a8ed-33861ac617e1"
            },
            "title": {
                "data": "About me"
            },
            "text": {
                "data": "jmthuong97",
                "rotated": "rotated1"
            },
            "description": "\"I'm a web designer, front-end developer and I love programming\"",
            "content": "&hearts; Nguyen Nhu Thuong <br/> &hearts; 05/06/1997 <br/> &hearts; +84-98635222 <br/> &hearts; Hanoi, Vietnam <br/> My objective is taking advantages of software developer skills, experience from university and understanding of software to become a professional software engineer. I always try my best to learn new programming languages and develop new ideas to create quality products."
        }
    };

    onHandleClick = () => {
        let {dataItem} = this.state;
        dataItem["text"]["data"] = "xxxxxxxxx";
        this.setState({dataItem})
    };

    onHandleSelectFile = (event) => {
        let {dataItem} = this.state;
        dataItem["picture"]["thumbnail"] = URL.createObjectURL(event.target.files[0]);
        console.log(dataItem)
        this.setState({dataItem})
    };

    onChange = (e) => {
        let {dataItem} = this.state;
        dataItem["text"]["data"] = e.target.value;
        this.setState({dataItem})
    }

    render() {
        const {dataItem} = this.state;
        return (
            <Main>
                <Header/>
                <Review><GridItem dataItem={dataItem} single={true}/></Review>
                <Control>
                    <Input.Text onChange={this.onChange} title="Text" placeholder="What's your email?"/>

                    <input ref="file" type="file" onChange={this.onHandleSelectFile}/>
                    <button onClick={this.onHandleClick}>Change Name</button>
                </Control>
            </Main>
        );
    }
}

export default Upload;