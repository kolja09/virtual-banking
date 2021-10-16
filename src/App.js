import React from 'react';
import './App.css'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact> <Home /> </Route>
                    <Route path='/signin'> <SigninPage /> </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;