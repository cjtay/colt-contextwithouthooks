import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: true,
            userType: 'admin'
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        // this.setState({ isLoggedin: !this.state.isLoggedin });
        this.setState(prevState => ({
            isLoggedin: !prevState.isLoggedin
        }));
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    ...this.state,
                    spareProps: 'hi!',
                    handleLogin: this.handleLogin
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;
