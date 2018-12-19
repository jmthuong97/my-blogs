import React, {Component} from 'react';
import {getAllPosts} from './module/PostAPI';
import GridLayout from './container/GridLayout';
import './App.css';
import Loading from "./component/Atom/Loading";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        };
    }

    componentDidMount() {
        getAllPosts().then(posts => this.setState({posts: posts.data}));
    }

    render() {
        const {isLoading, posts} = this.state;
        const setIsLoading = (isLoading) => this.setState({isLoading});
        return (
            <div className="App">
                {isLoading && <Loading/>}
                <GridLayout isLoading={isLoading} setIsLoading={setIsLoading} posts={posts}/>
            </div>
        );
    }
}

export default App;
