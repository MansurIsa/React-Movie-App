import React, { Component } from 'react'
import HeaderIcons from './header_component/HeaderIcons'
import HeaderMain from './header_component/HeaderMain'
import Logo from './header_component/Logo'
import Nav from './header_component/Nav'

export class Header extends Component {
  render() {
    return (
        <header>
            <div className="header_shadow">
                <div className="header_container row">
                    <Logo />
                    <Nav />
                    <HeaderIcons />
                </div>
                <HeaderMain />
            </div>
        </header>
    )
  }
}

export default Header