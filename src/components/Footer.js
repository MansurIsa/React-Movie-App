import React, { Component } from 'react'
import FooterIcons from './footer_components/FooterIcons'
import FooterNav from './footer_components/FooterNav'
import Logo from './header_component/Logo'

export class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footer_container">
                <Logo />
                <FooterNav />
                <FooterIcons />
            </div>
        </footer>
    )
  }
}

export default Footer