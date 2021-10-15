import React from 'react';
import './App.css'
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/Signin";

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route path='/' exact render={() => Home} />
                <Route path='/signin' exact render={() => SigninPage}/>
            </Switch>
        </div>
    );
};

export default App;