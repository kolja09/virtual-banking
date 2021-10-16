import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/signin' exact component={SigninPage}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;