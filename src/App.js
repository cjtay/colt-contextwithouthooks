import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import AuthProvider from './contexts/AuthContext';
import LangProvider from './contexts/LangContext';

import Nav from './Nav';
import './App.css';

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <LangProvider>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={ComponentOne} />
                        <Route exact path='/two' component={ComponentTwo} />
                        <Route exact path='/three' component={ComponentThree} />
                    </Switch>
                </LangProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
