import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signin' component={SigninPage} exact/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;