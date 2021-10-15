import React from 'react';
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signin' exact component={SigninPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;