import React from 'react';
import './App.css'
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' component={SigninPage} exact/>
            </Switch>
        </div>
    );
};

export default App;