import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

class Nav extends Component {
    static contextType = AuthContext;
    render() {
        console.log(this.context);
        const { isLoggedin } = this.context;
        return (
            <div className='Nav'>
                <NavLink
                    exact
                    to='/'
                    className='navlink'
                    activeClassName='active'
                >
                    Home
                </NavLink>
                <NavLink
                    exact
                    to='/two'
                    className='navlink'
                    activeClassName='active'
                >
                    Page 2
                </NavLink>
                {isLoggedin ? (
                    <NavLink
                        exact
                        to='/three'
                        className='navlink'
                        activeClassName='active'
                    >
                        Page 3
                    </NavLink>
                ) : (
                    <NavLink exact to='/three'>
                        Please login
                    </NavLink>
                )}
            </div>
        );
    }
}

export default Nav;
