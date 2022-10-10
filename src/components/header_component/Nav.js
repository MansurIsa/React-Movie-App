import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div>
        <input type="checkbox"  id="resp-check" />
        <nav >
            <ul className="row main-nav">
                <li><a href="tv_shows.html">TV Shows</a></li>
                <li><a href="movies.html">Movies</a></li>
                <li><a href="upcoming.html">Upcoming</a></li>
                <li><a href="trailers.html">Trailers</a></li>
                <li><a href="my_list.html">My List</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Nav