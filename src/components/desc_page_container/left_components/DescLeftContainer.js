import React, { Component } from 'react'
import CastContainer from './CastContainer'
import MovieContainer from './MovieContainer'

export class DescLeftContainer extends Component {
  render() {
    return (
      <div className='desc_page_left_container'>
        <MovieContainer />
        <CastContainer />
      </div>
    )
  }
}

export default DescLeftContainer