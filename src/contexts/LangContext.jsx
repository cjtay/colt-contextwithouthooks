import React, { Component, createContext } from 'react';

export const LangContext = createContext();

export class LangProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'Chinese'
        };
    }

    render() {
        return (
            <LangContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </LangContext.Provider>
        );
    }
}

export default LangProvider;
