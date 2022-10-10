import React, { Component } from 'react'

export class FooterNav extends Component {
  render() {
    return (
        <div className="links">
            <ul className="main-nav row">
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Upcoming</li>
                <li>Trailers</li>
                <li>My list</li>
            </ul>
        </div>
    )
  }
}

export default FooterNav