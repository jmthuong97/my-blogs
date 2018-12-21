import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './container/Home';
import Upload from './container/Upload';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/upload" component={Upload}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
