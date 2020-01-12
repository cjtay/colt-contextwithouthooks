import React, { Component } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { LangContext } from './contexts/LangContext';

class ComponentThree extends Component {
    static contextType = AuthContext;

    render() {
        const { spareProps, userType, handleLogin } = this.context;

        return (
            <LangContext.Consumer>
                {value => (
                    <>
                        <h1>Page 3</h1>
                        <p>SpareProps: {spareProps}</p>
                        <p>UserType: {userType}</p>
                        <p>Language: {value.lang}</p>
                        <button onClick={handleLogin}>Login</button>
                    </>
                )}
            </LangContext.Consumer>
        );
    }
}

export default ComponentThree;
